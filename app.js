const BSC_TESTNET_CHAIN_ID = 97;
const STAKING_ADDRESS = "0x4E416179c8cE226586Cfbe4c4d87bFCA2fB0ce9a";

const STAKING_ABI = [
  "function stakeToken() view returns (address)",
  "function deposit(uint256 amount)",
  "function depositWithReferrer(uint256 amount, address referrerAddr)",
  "function previewNetAndInterest(uint256 grossAmount) view returns (bool valid,uint256 totalFee,uint256 netAmount,uint256 duration,uint256 totalRateBP,uint256 interestAmount,uint256 payoutAmount)",
  "function getStakesCount(address user) view returns (uint256)",
  "function getStake(address user,uint256 stakeId) view returns (tuple(uint256 amount,uint256 startTs,uint256 duration,bool withdrawn,bool active,uint256 rateBP,uint256 interestAmount))",
  "function getContractTokenBalance() view returns (uint256)",
  "function manualWithdrawMatured(uint256 stakeId)",
  "function withdrawWithPressStake(uint256 oldStakeId,uint256 newStakeGrossAmount)",
  "function claimAgentRewards()"
];

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)"
];

let provider;
let signer;
let userAddress;
let staking;
let token;
let tokenDecimals = 18;

const $ = (id) => document.getElementById(id);

function log(message) {
  const target = $("log");
  const now = new Date().toLocaleTimeString();
  target.textContent = `[${now}] ${message}\n` + target.textContent;
}

function parseAmount(input) {
  const raw = input.trim();
  if (!raw) throw new Error("请输入数量");
  return ethers.utils.parseUnits(raw, tokenDecimals);
}

function formatAmount(value) {
  return ethers.utils.formatUnits(value, tokenDecimals);
}

async function connectWallet() {
  if (!window.ethereum) throw new Error("未检测到钱包插件");
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, signer);
  const tokenAddr = await staking.stakeToken();
  token = new ethers.Contract(tokenAddr, ERC20_ABI, signer);
  tokenDecimals = await token.decimals();

  $("wallet").textContent = userAddress;
  await refreshNetwork();
  await refreshMyData();
  log("钱包连接成功");
}

async function refreshNetwork() {
  const net = await provider.getNetwork();
  const text = `${net.name} (chainId=${net.chainId})`;
  $("network").textContent = text;
  if (Number(net.chainId) !== BSC_TESTNET_CHAIN_ID) {
    log("警告：当前不在 BSC 测试网");
  }
}

async function switchToBscTestnet() {
  if (!window.ethereum) throw new Error("未检测到钱包插件");
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x61" }]
    });
  } catch (err) {
    if (err.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0x61",
          chainName: "BSC Testnet",
          nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          blockExplorerUrls: ["https://testnet.bscscan.com"]
        }]
      });
    } else {
      throw err;
    }
  }
  if (provider) await refreshNetwork();
  log("网络已切换/添加到 BSC 测试网");
}

async function refreshMyData() {
  if (!signer || !staking || !token) throw new Error("请先连接钱包");
  const [balance, allowance, count, pool] = await Promise.all([
    token.balanceOf(userAddress),
    token.allowance(userAddress, STAKING_ADDRESS),
    staking.getStakesCount(userAddress),
    staking.getContractTokenBalance()
  ]);

  $("linkBalance").textContent = formatAmount(balance);
  $("allowance").textContent = formatAmount(allowance);
  $("myStakeCount").textContent = count.toString();
  $("poolBalance").textContent = formatAmount(pool);
}

async function approve() {
  const amount = parseAmount($("amount").value);
  const tx = await token.approve(STAKING_ADDRESS, amount);
  log(`授权已发送: ${tx.hash}`);
  await tx.wait();
  log("授权成功");
  await refreshMyData();
}

async function deposit() {
  const amount = parseAmount($("amount").value);
  const tx = await staking.deposit(amount);
  log(`质押交易已发送: ${tx.hash}`);
  await tx.wait();
  log("质押成功");
  await refreshMyData();
}

async function depositWithReferrer() {
  const amount = parseAmount($("amount").value);
  const referrer = $("referrer").value.trim();
  if (!ethers.utils.isAddress(referrer)) throw new Error("推荐人地址无效");
  const tx = await staking.depositWithReferrer(amount, referrer);
  log(`带推荐质押已发送: ${tx.hash}`);
  await tx.wait();
  log("带推荐质押成功");
  await refreshMyData();
}

async function preview() {
  const amount = parseAmount($("amount").value);
  const result = await staking.previewNetAndInterest(amount);
  $("pvValid").textContent = String(result.valid);
  $("pvFee").textContent = formatAmount(result.totalFee);
  $("pvNet").textContent = formatAmount(result.netAmount);
  $("pvDuration").textContent = result.duration.toString();
  $("pvRate").textContent = result.totalRateBP.toString();
  $("pvInterest").textContent = formatAmount(result.interestAmount);
  $("pvPayout").textContent = formatAmount(result.payoutAmount);
}

async function manualWithdraw() {
  const id = Number($("withdrawStakeId").value);
  if (Number.isNaN(id) || id < 0) throw new Error("stakeId 无效");
  const tx = await staking.manualWithdrawMatured(id);
  log(`手动提现已发送: ${tx.hash}`);
  await tx.wait();
  log("手动提现成功");
  await refreshMyData();
}

async function pressWithdraw() {
  const oldId = Number($("pressOldId").value);
  const newAmount = parseAmount($("pressNewAmount").value);
  if (Number.isNaN(oldId) || oldId < 0) throw new Error("oldStakeId 无效");
  const tx = await staking.withdrawWithPressStake(oldId, newAmount);
  log(`压单提现已发送: ${tx.hash}`);
  await tx.wait();
  log("压单提现成功");
  await refreshMyData();
}

async function claimAgent() {
  const tx = await staking.claimAgentRewards();
  log(`领取代理奖励已发送: ${tx.hash}`);
  await tx.wait();
  log("领取代理奖励成功");
  await refreshMyData();
}

async function queryStake() {
  const id = Number($("queryStakeId").value);
  if (Number.isNaN(id) || id < 0) throw new Error("stakeId 无效");
  const s = await staking.getStake(userAddress, id);
  $("stakeDetail").textContent = JSON.stringify({
    amount: formatAmount(s.amount),
    startTs: s.startTs.toString(),
    duration: s.duration.toString(),
    withdrawn: s.withdrawn,
    active: s.active,
    rateBP: s.rateBP.toString(),
    interestAmount: formatAmount(s.interestAmount)
  }, null, 2);
}

async function run(action) {
  try {
    await action();
  } catch (e) {
    log(`失败: ${e.message || e}`);
  }
}

$("connectBtn").onclick = () => run(connectWallet);
$("switchChainBtn").onclick = () => run(switchToBscTestnet);
$("refreshMyBtn").onclick = () => run(refreshMyData);
$("approveBtn").onclick = () => run(approve);
$("depositBtn").onclick = () => run(deposit);
$("depositWithRefBtn").onclick = () => run(depositWithReferrer);
$("previewBtn").onclick = () => run(preview);
$("manualWithdrawBtn").onclick = () => run(manualWithdraw);
$("pressWithdrawBtn").onclick = () => run(pressWithdraw);
$("claimAgentBtn").onclick = () => run(claimAgent);
$("queryStakeBtn").onclick = () => run(queryStake);
