const BSC_MAINNET_CHAIN_ID = 56;
const STAKING_ADDRESS = "0xbd641e926219e5757f03bdfdc3e2820b5b64f230";
const EXPECTED_TOKEN_ADDRESS = "0xCA18ff41e63539E67AcE684e90e36d04Dcf74E72";

const I18N = {
  en: {
    langToggle: "中文",
    brandTitle: "Link Paladin Protocol",
    brandSub: "Alliance of Links · BSC Mainnet",
    heroTitle: "On-Chain Staking Hub",
    heroSub: "Efficient staking · Agent rewards · Cross-chain synergy",
    heroPill: "Operations Bulletin · Rules Update",
    walletLabel: "Wallet",
    networkLabel: "Network",
    linkBalanceLabel: "LINK Balance",
    allowanceLabel: "Allowance",
    stakingTitle: "Staking",
    stakeAmountLabel: "Stake Amount (LINK)",
    previewBtn: "Preview Net & Yield",
    approveBtn: "Approve",
    depositBtn: "Deposit",
    referrerLabel: "Referrer Address (first-time binding)",
    depositWithRefBtn: "Deposit with Referrer",
    pvValidLabel: "Valid",
    pvBaseLabel: "Interest Base (99%)",
    pvDurationLabel: "Duration (sec)",
    pvRateLabel: "Rate (BP)",
    pvInterestLabel: "Est. Interest",
    pvPayoutLabel: "Est. Payout",
    withdrawTitle: "Withdraw & Agent",
    manualWithdrawLabel: "Manual Withdraw stakeId",
    pressOldLabel: "Press-stake Withdraw oldStakeId",
    pressNewAmountLabel: "New Stake Amount (LINK)",
    claimAgentBtn: "Claim Agent Rewards",
    queryTitle: "Query",
    refreshMyBtn: "Refresh My Data",
    totalStakesLabel: "Total Stakes",
    queryStakeLabel: "Query stakeId",
    queryStakeBtn: "Query Stake",
    logTitle: "Log",
    connect: "Connect Wallet",
    disconnect: "Disconnect",
    switchNetwork: "Switch to BSC Mainnet",
    notConnected: "Not connected",
    unknown: "Unknown",
    readFailed: "Read failed",
    disconnectedLog: "Disconnected (state cleared)",
    disconnectedToast: "Disconnected",
    connectFirst: "Please connect your wallet first",
    wrongNetwork: "You are not on BSC Mainnet (chainId=56). Please switch network.",
    gasRetry: "Gas too low, retrying: maxFee {maxFee} gwei, priority {priority} gwei",
    noWallet: "No wallet detected (use MetaMask or TokenPocket in-app browser)",
    noContractCode: "Warning: contract has no code. Check network and address.",
    stakeTokenMismatch: "Warning: stakeToken mismatch. Check the contract.",
    decimalsFallback: "Failed to read decimals, defaulted to 18",
    walletConnected: "Wallet connected",
    currentContract: "Current contract: {address}",
    accountChanged: "Account changed, state refreshed",
    accountChangedFail: "Failed to refresh after account change: {error}",
    networkChanged: "Network changed, state refreshed",
    networkChangedFail: "Failed to refresh after network change: {error}",
    notOnMainnetWarn: "Warning: not on BSC Mainnet",
    switchedMainnet: "Switched/added BSC Mainnet",
    connectCanceled: "{action} canceled (user rejected signature)",
    actionFailed: "{action} failed: {message}",
    enterAmount: "Enter an amount",
    approvalSent: "Approval sent: {hash}",
    approvalSuccess: "Approval successful",
    depositSent: "Deposit sent: {hash}",
    depositSuccess: "Deposit successful",
    balanceInsufficient: "Insufficient balance",
    allowanceInsufficient: "Insufficient allowance. Please approve first.",
    referrerNotBound: "Referrer not bound. Use 'Deposit with referrer' for your first stake.",
    invalidReferrer: "Invalid referrer address",
    referrerNoStake: "Referrer has no active stake on this contract",
    depositRefSent: "Deposit with referrer sent: {hash}",
    depositRefSuccess: "Deposit successful (referrer bound)",
    invalidStakeId: "Invalid stakeId",
    invalidOldStakeId: "Invalid oldStakeId",
    manualWithdrawSent: "Manual withdraw sent: {hash}",
    manualWithdrawSuccess: "Manual withdraw successful",
    pressWithdrawSent: "Press-stake withdraw sent: {hash}",
    pressWithdrawSuccess: "Press-stake withdraw successful",
    claimAgentSent: "Claim agent rewards sent: {hash}",
    claimAgentSuccess: "Claim agent rewards successful",
    queryStakeInvalid: "Invalid stakeId",
    refreshData: "Refresh Data",
    approveAction: "Approve",
    depositAction: "Deposit",
    depositWithRefAction: "Deposit with Referrer",
    previewAction: "Preview",
    manualWithdrawAction: "Manual Withdraw",
    pressWithdrawAction: "Press-stake Withdraw",
    claimAgentAction: "Claim Agent Rewards",
    queryStakeAction: "Query Stake",
    switchNetworkAction: "Switch Network",
    connectAction: "Connect Wallet",
    disconnectAction: "Disconnect",
    amountPlaceholder: "e.g. 1",
    stakeIdPlaceholder: "e.g. 0",
    addressPlaceholder: "0x...",
    teamTitle: "My Team",
    agentLevelLabel: "Agent Level",
    teamCountLabel: "Team Members",
    pendingRewardsLabel: "Pending Rewards",
    agentStatusLabel: "Agent Status",
    downlineCountLabel: "Downline Agents",
    refreshTeamBtn: "Refresh Team Data",
    agentLevelNone: "None",
    agentLevel1: "L1",
    agentLevel2: "L2",
    agentLevel3: "L3",
    agentLevel4: "L4",
    agentLevel5: "L5",
    agentStatusActive: "Active",
    agentStatusInactive: "Inactive",
    noAgentData: "No agent data available"
  },
  zh: {
    langToggle: "English",
    brandTitle: "Link圣骑协议",
    brandSub: "Alliance of Links · BSC 主网",
    heroTitle: "链上质押中心",
    heroSub: "高效质押 · 代理激励 · 全链协同",
    heroPill: "运营中心公告 · 规则更新",
    walletLabel: "钱包",
    networkLabel: "网络",
    linkBalanceLabel: "LINK 余额",
    allowanceLabel: "授权额度",
    stakingTitle: "质押",
    stakeAmountLabel: "质押数量（LINK）",
    previewBtn: "预览净额与收益",
    approveBtn: "授权",
    depositBtn: "直接质押",
    referrerLabel: "推荐人地址（首次绑定用）",
    depositWithRefBtn: "带推荐人质押",
    pvValidLabel: "有效",
    pvBaseLabel: "计息基数(99%)",
    pvDurationLabel: "周期(秒)",
    pvRateLabel: "总利率(BP)",
    pvInterestLabel: "预计利息",
    pvPayoutLabel: "预计返还",
    withdrawTitle: "提现与代理",
    manualWithdrawLabel: "手动提现 stakeId",
    pressOldLabel: "压单提现 oldStakeId",
    pressNewAmountLabel: "新质押数量（LINK）",
    claimAgentBtn: "领取代理奖励",
    queryTitle: "查询",
    refreshMyBtn: "刷新我的数据",
    totalStakesLabel: "我的总 Stake 数",
    queryStakeLabel: "查询 stakeId",
    queryStakeBtn: "查询单笔Stake",
    logTitle: "日志",
    connect: "连接钱包",
    disconnect: "断开连接",
    switchNetwork: "切换到 BSC 主网",
    notConnected: "未连接",
    unknown: "未知",
    readFailed: "读取失败",
    disconnectedLog: "已断开（已清空状态）",
    disconnectedToast: "已断开",
    connectFirst: "请先连接钱包",
    wrongNetwork: "当前不是 BSC 主网（chainId=56），请切换网络。",
    gasRetry: "Gas 太低，重试：maxFee {maxFee} gwei，priority {priority} gwei",
    noWallet: "未检测到钱包（请使用 MetaMask 或 TokenPocket 内置浏览器）",
    noContractCode: "警告：合约地址无代码，请检查网络和地址。",
    stakeTokenMismatch: "警告：stakeToken 不一致，请检查合约。",
    decimalsFallback: "读取 decimals 失败，已使用 18",
    walletConnected: "钱包已连接",
    currentContract: "当前合约：{address}",
    accountChanged: "账号已切换，状态已刷新",
    accountChangedFail: "切换账号后刷新失败：{error}",
    networkChanged: "网络已切换，状态已刷新",
    networkChangedFail: "切换网络后刷新失败：{error}",
    notOnMainnetWarn: "警告：当前不是 BSC 主网",
    switchedMainnet: "已切换/添加 BSC 主网",
    connectCanceled: "{action} 已取消（用户拒绝签名）",
    actionFailed: "{action} 失败：{message}",
    enterAmount: "请输入数量",
    approvalSent: "授权已发送：{hash}",
    approvalSuccess: "授权成功",
    depositSent: "质押已发送：{hash}",
    depositSuccess: "质押成功",
    balanceInsufficient: "余额不足",
    allowanceInsufficient: "授权额度不足，请先授权。",
    referrerNotBound: "未绑定推荐人，请使用“带推荐人质押”完成首笔绑定。",
    invalidReferrer: "推荐人地址无效",
    referrerNoStake: "推荐人在本合约下无有效质押",
    depositRefSent: "带推荐人质押已发送：{hash}",
    depositRefSuccess: "质押成功（推荐人已绑定）",
    invalidStakeId: "stakeId 无效",
    invalidOldStakeId: "oldStakeId 无效",
    manualWithdrawSent: "手动提现已发送：{hash}",
    manualWithdrawSuccess: "手动提现成功",
    pressWithdrawSent: "压单提现已发送：{hash}",
    pressWithdrawSuccess: "压单提现成功",
    claimAgentSent: "领取代理奖励已发送：{hash}",
    claimAgentSuccess: "领取代理奖励成功",
    queryStakeInvalid: "stakeId 无效",
    refreshData: "刷新数据",
    approveAction: "授权",
    depositAction: "直接质押",
    depositWithRefAction: "带推荐人质押",
    previewAction: "预览",
    manualWithdrawAction: "手动提现",
    pressWithdrawAction: "压单提现",
    claimAgentAction: "领取代理奖励",
    queryStakeAction: "查询单笔Stake",
    switchNetworkAction: "切换网络",
    connectAction: "连接钱包",
    disconnectAction: "断开连接",
    amountPlaceholder: "例如 1",
    stakeIdPlaceholder: "例如 0",
    addressPlaceholder: "0x...",
    teamTitle: "我的团队",
    agentLevelLabel: "代理等级",
    teamCountLabel: "团队成员",
    pendingRewardsLabel: "待领取奖励",
    agentStatusLabel: "代理状态",
    downlineCountLabel: "下线代理",
    refreshTeamBtn: "刷新团队数据",
    agentLevelNone: "无",
    agentLevel1: "L1",
    agentLevel2: "L2",
    agentLevel3: "L3",
    agentLevel4: "L4",
    agentLevel5: "L5",
    agentStatusActive: "活跃",
    agentStatusInactive: "非活跃",
    noAgentData: "暂无代理数据"
  }
};

const STAKING_ABI = [
  "function stakeToken() view returns (address)",
  "function deposit(uint256 amount)",
  "function depositWithReferrer(uint256 amount, address referrerAddr)",
  "function getReferrer(address user) view returns (address)",
  "function firstUser() view returns (address)",
  "function previewNetAndInterest(uint256 grossAmount) view returns (bool valid,uint256 totalFee,uint256 netAmount,uint256 duration,uint256 totalRateBP,uint256 interestAmount,uint256 payoutAmount)",
  "function getStakesCount(address user) view returns (uint256)",
  "function getStake(address user,uint256 stakeId) view returns (tuple(uint256 amount,uint256 startTs,uint256 duration,bool withdrawn,bool active,uint256 rateBP,uint256 interestAmount))",
  "function getContractTokenBalance() view returns (uint256)",
  "function manualWithdrawMatured(uint256 stakeId)",
  "function withdrawWithPressStake(uint256 oldStakeId,uint256 newStakeGrossAmount)",
  "function claimAgentRewards()",
  "function getAgentInfo(address agent) view returns (tuple(uint8 level,uint256 teamValidCount,uint256 totalRewards,uint256 pendingRewards,uint256 lastClaimTime,uint256 performance,bool isActive,bool manualL12NoCheck,uint256 registeredAt))",
  "function getDownlineAgents(address agent) view returns (address[])",
  "function getTeamCount(address agent) view returns (uint256)"
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
let isConnected = false;
let listenersBound = false;
let injectedEthereum;
let currentLang = localStorage.getItem("lang") || "en";

function getInjectedEthereum() {
  const eth = window.ethereum;
  if (!eth) return null;

  // Some wallets (e.g., TokenPocket/MetaMask) may expose multiple providers.
  const providers = Array.isArray(eth.providers) ? eth.providers : null;
  if (providers && providers.length > 0) {
    const tokenPocket = providers.find((p) => p && p.isTokenPocket);
    if (tokenPocket) return tokenPocket;

    const metaMask = providers.find((p) => p && p.isMetaMask);
    if (metaMask) return metaMask;

    return providers[0];
  }

  return eth;
}

const CUSTOM_ERROR_MESSAGES = {
  en: {
    MinDeposit: "Deposit amount is below the minimum (min 1 LINK)",
    InvalidMultiple: "Deposit amount must be a whole multiple of 1 LINK",
    AmountExceedsMax: "Deposit amount exceeds the max single stake",
    MaxStakesExceeded: "This address reached the max stake count",
    ActiveStakeNotMatured: "You already have an active stake that has not matured",
    CannotReferSelf: "You cannot refer yourself",
    ReferrerMustHaveStake: "Referrer must have an active stake",
    ReferrerRequired: "Non-first users must bind a referrer",
    CircularReference: "Referral relation is circular",
    AlreadyInDownline: "Relation already exists in downline",
    ContractAddressNotAllowed: "Only EOA wallets are allowed",
    ReferrerContractNotAllowed: "Referrer cannot be a contract address",
    NotAuthorized: "You are not authorized to perform this action",
    InvalidStakeId: "Invalid stakeId",
    StakeNotActive: "Stake is not active",
    StakeNotMatured: "Stake has not matured yet",
    CannotWithdrawLastStake: "The last active stake cannot be withdrawn directly",
    InsufficientRestake: "New stake amount is insufficient for press-stake",
    InsufficientPoolBalance: "Contract pool balance is insufficient",
    NoPendingRewards: "No pending agent rewards",
    TokenTransferFromFailed: "Token transferFrom failed (check allowance and balance)",
    TokenTransferFailed: "Token transfer failed",
    FeeWallet3MustBeBlackhole: "fee3 must be the blackhole address"
  },
  zh: {
    MinDeposit: "质押数量低于最小值（至少 1 LINK）",
    InvalidMultiple: "质押数量必须为 1 LINK 的整数倍",
    AmountExceedsMax: "质押数量超过单笔上限",
    MaxStakesExceeded: "该地址已达到最大质押笔数",
    ActiveStakeNotMatured: "已有未到期的有效质押",
    CannotReferSelf: "不能推荐自己",
    ReferrerMustHaveStake: "推荐人必须有有效质押",
    ReferrerRequired: "非首位用户必须绑定推荐人",
    CircularReference: "推荐关系形成闭环",
    AlreadyInDownline: "关系已存在于下线中",
    ContractAddressNotAllowed: "仅允许 EOA 钱包",
    ReferrerContractNotAllowed: "推荐人不能是合约地址",
    NotAuthorized: "无权限执行此操作",
    InvalidStakeId: "stakeId 无效",
    StakeNotActive: "质押未激活",
    StakeNotMatured: "质押未到期",
    CannotWithdrawLastStake: "最后一笔有效质押不可直接提现",
    InsufficientRestake: "新质押数量不足以压单",
    InsufficientPoolBalance: "合约池余额不足",
    NoPendingRewards: "暂无可领取代理奖励",
    TokenTransferFromFailed: "transferFrom 失败（检查授权与余额）",
    TokenTransferFailed: "代币转账失败",
    FeeWallet3MustBeBlackhole: "fee3 必须是黑洞地址"
  }
};

const CUSTOM_ERROR_SELECTORS = Object.fromEntries(
  Object.keys(CUSTOM_ERROR_MESSAGES.en).map((name) => [
    ethers.utils.id(`${name}()`).slice(0, 10).toLowerCase(),
    name
  ])
);

const $ = (id) => document.getElementById(id);

function t(key, vars) {
  const dict = I18N[currentLang] || I18N.en;
  let text = dict[key] || I18N.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach((k) => {
      text = text.replace(`{${k}}`, vars[k]);
    });
  }
  return text;
}

function setText(id, key) {
  const el = $(id);
  if (el) el.textContent = t(key);
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  setText("brandTitle", "brandTitle");
  setText("brandSub", "brandSub");
  setText("heroTitle", "heroTitle");
  setText("heroSub", "heroSub");
  setText("heroPill", "heroPill");
  setText("walletLabel", "walletLabel");
  setText("networkLabel", "networkLabel");
  setText("linkBalanceLabel", "linkBalanceLabel");
  setText("allowanceLabel", "allowanceLabel");
  setText("stakingTitle", "stakingTitle");
  setText("stakeAmountLabel", "stakeAmountLabel");
  setText("previewBtn", "previewBtn");
  setText("approveBtn", "approveBtn");
  setText("depositBtn", "depositBtn");
  setText("referrerLabel", "referrerLabel");
  setText("depositWithRefBtn", "depositWithRefBtn");
  setText("pvValidLabel", "pvValidLabel");
  setText("pvBaseLabel", "pvBaseLabel");
  setText("pvDurationLabel", "pvDurationLabel");
  setText("pvRateLabel", "pvRateLabel");
  setText("pvInterestLabel", "pvInterestLabel");
  setText("pvPayoutLabel", "pvPayoutLabel");
  setText("withdrawTitle", "withdrawTitle");
  setText("manualWithdrawLabel", "manualWithdrawLabel");
  setText("manualWithdrawBtn", "manualWithdrawAction");
  setText("pressOldLabel", "pressOldLabel");
  setText("pressNewAmountLabel", "pressNewAmountLabel");
  setText("pressWithdrawBtn", "pressWithdrawAction");
  setText("claimAgentBtn", "claimAgentBtn");
  setText("queryTitle", "queryTitle");
  setText("refreshMyBtn", "refreshMyBtn");
  setText("totalStakesLabel", "totalStakesLabel");
  setText("queryStakeLabel", "queryStakeLabel");
  setText("queryStakeBtn", "queryStakeBtn");
  setText("logTitle", "logTitle");

  // Team section
  setText("teamTitle", "teamTitle");
  setText("agentLevelLabel", "agentLevelLabel");
  setText("teamCountLabel", "teamCountLabel");
  setText("pendingRewardsLabel", "pendingRewardsLabel");
  setText("agentStatusLabel", "agentStatusLabel");
  setText("downlineCountLabel", "downlineCountLabel");
  const refreshTeamBtn = $ ("refreshTeamBtn");
  if (refreshTeamBtn) refreshTeamBtn.textContent = t("refreshTeamBtn");

  const langBtn = $ ("langToggleBtn");
  if (langBtn) langBtn.textContent = t("langToggle");

  const switchBtn = $ ("switchChainBtn");
  if (switchBtn) switchBtn.textContent = t("switchNetwork");

  setConnectedUI(isConnected);
  if (!isConnected) {
    const wallet = $("wallet");
    const network = $("network");
    if (wallet) wallet.textContent = t("notConnected");
    if (network) network.textContent = t("unknown");
  }

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", t(key));
  });
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "zh" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

function setConnectedUI(connected) {
  isConnected = connected;
  const btn = $("connectBtn");
  if (btn) btn.textContent = connected ? t("disconnect") : t("connect");
}

function resetUI() {
  $("wallet").textContent = t("notConnected");
  $("network").textContent = t("unknown");
  $("linkBalance").textContent = "-";
  $("allowance").textContent = "-";
  $("myStakeCount").textContent = "-";

  const detail = $("stakeDetail");
  if (detail) detail.textContent = "-";

  // preview fields
  const pvIds = ["pvValid", "pvBase", "pvDuration", "pvRate", "pvInterest", "pvPayout"];
  for (const id of pvIds) {
    const el = $(id);
    if (el) el.textContent = "-";
  }

  // Team info
  const teamIds = ["agentLevel", "teamCount", "pendingRewards", "agentStatus", "downlineCount"];
  for (const id of teamIds) {
    const el = $(id);
    if (el) el.textContent = "-";
  }

  const teamDetail = $("teamDetail");
  if (teamDetail) teamDetail.textContent = "-";
}

function disconnectWallet() {
  provider = null;
  signer = null;
  userAddress = null;
  staking = null;
  token = null;
  tokenDecimals = 18;
  setConnectedUI(false);
  resetUI();
  log(t("disconnectedLog"));
  toast("success", t("disconnectedToast"));
}

async function requireCorrectNetwork() {
  if (!provider) throw new Error(t("connectFirst"));
  const net = await provider.getNetwork();
  if (Number(net.chainId) !== BSC_MAINNET_CHAIN_ID) {
    throw new Error(t("wrongNetwork"));
  }
}

function isGasTooLowError(errorObj) {
  const code = errorObj?.code;
  const msg = String(errorObj?.message || errorObj || "");
  return (
    code === -32000 &&
    /gas price below minimum|gas tip cap .* below minimum|minimum needed/i.test(msg)
  );
}

async function sendTxAdaptive(sendDefault, sendWithOverrides) {
  try {
    return await sendDefault();
  } catch (e) {
    if (!provider || !isGasTooLowError(e)) throw e;

    const feeData = await provider.getFeeData();
    const minTip = ethers.utils.parseUnits("1", "gwei");
    const baseFee = feeData.lastBaseFeePerGas || feeData.gasPrice || (await provider.getGasPrice());
    const priorityFee = feeData.maxPriorityFeePerGas && feeData.maxPriorityFeePerGas.gt(minTip)
      ? feeData.maxPriorityFeePerGas
      : minTip;
    const maxFee = baseFee.mul(2).add(priorityFee);

    log(t("gasRetry", {
      maxFee: ethers.utils.formatUnits(maxFee, "gwei"),
      priority: ethers.utils.formatUnits(priorityFee, "gwei")
    }));

    return await sendWithOverrides({
      maxFeePerGas: maxFee,
      maxPriorityFeePerGas: priorityFee
    });
  }
}

function log(message) {
  const target = $("log");
  const now = new Date().toLocaleTimeString();
  target.textContent = `[${now}] ${message}\n` + target.textContent;
}

function toast(type, message) {
  const container = $("toastContainer");
  if (!container) return;
  const node = document.createElement("div");
  node.className = `toast ${type}`;
  node.textContent = message;
  container.appendChild(node);
  setTimeout(() => {
    node.remove();
  }, 2600);
}

function extractErrorData(errorObj) {
  if (!errorObj) return "";
  if (typeof errorObj === "string" && errorObj.startsWith("0x")) return errorObj;
  if (typeof errorObj.data === "string" && errorObj.data.startsWith("0x")) return errorObj.data;
  if (errorObj.data && typeof errorObj.data === "object") {
    const nestedData = extractErrorData(errorObj.data);
    if (nestedData) return nestedData;
  }
  if (errorObj.error) {
    const nested = extractErrorData(errorObj.error);
    if (nested) return nested;
  }
  if (errorObj.receipt && typeof errorObj.receipt.revertString === "string") {
    return errorObj.receipt.revertString;
  }
  return "";
}

async function hasActiveStake(addressToCheck) {
  const count = await staking.getStakesCount(addressToCheck);
  const total = Number(count.toString());
  if (total <= 0) return false;

  const start = Math.max(0, total - 10);
  for (let i = total - 1; i >= start; i--) {
    const s = await staking.getStake(addressToCheck, i);
    if (s.active && !s.withdrawn && s.amount.gt(0)) {
      return true;
    }
  }
  return false;
}

function decodeCustomError(errorObj) {
  const rawData = extractErrorData(errorObj);
  const text = String(errorObj?.message || errorObj || "");

  let selector = "";
  if (rawData && rawData.startsWith("0x") && rawData.length >= 10) {
    selector = rawData.slice(0, 10).toLowerCase();
  } else {
    const match = text.match(/0x[0-9a-fA-F]{8}/);
    if (match) selector = match[0].toLowerCase();
  }

  if (!selector) return null;
  const errorName = CUSTOM_ERROR_SELECTORS[selector];
  if (!errorName) return null;
  return {
    errorName,
    message: (CUSTOM_ERROR_MESSAGES[currentLang] && CUSTOM_ERROR_MESSAGES[currentLang][errorName]) ||
      (CUSTOM_ERROR_MESSAGES.en && CUSTOM_ERROR_MESSAGES.en[errorName]) ||
      errorName
  };
}

function formatActionError(actionLabel, errorObj) {
  if (errorObj?.code === 4001) {
    return t("connectCanceled", { action: actionLabel });
  }

  const decoded = decodeCustomError(errorObj);
  if (decoded) {
    return t("actionFailed", {
      action: actionLabel,
      message: `${decoded.message} (${decoded.errorName})`
    });
  }

  return t("actionFailed", {
    action: actionLabel,
    message: errorObj?.message || errorObj
  });
}

function parseAmount(input) {
  const raw = input.trim();
  if (!raw) throw new Error(t("enterAmount"));
  return ethers.utils.parseUnits(raw, tokenDecimals);
}

function formatAmount(value) {
  return ethers.utils.formatUnits(value, tokenDecimals);
}

async function connectWallet() {
  injectedEthereum = getInjectedEthereum();
  if (!injectedEthereum) {
    throw new Error(t("noWallet"));
  }

  // Use "any" network so ethers doesn't get stuck on chain changes.
  provider = new ethers.providers.Web3Provider(injectedEthereum, "any");
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  const stakingCode = await provider.getCode(STAKING_ADDRESS);
  if (!stakingCode || stakingCode === "0x") {
    log(`Warning: contract has no code (wrong network/address): ${STAKING_ADDRESS}`);
    toast("error", t("noContractCode"));
  }

  staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, signer);
  const tokenAddr = await staking.stakeToken();

  if (String(tokenAddr).toLowerCase() !== String(EXPECTED_TOKEN_ADDRESS).toLowerCase()) {
    log(`Warning: stakeToken mismatch. stakeToken=${tokenAddr} expected=${EXPECTED_TOKEN_ADDRESS}`);
    toast("error", t("stakeTokenMismatch"));
  }

  token = new ethers.Contract(tokenAddr, ERC20_ABI, signer);
  try {
    tokenDecimals = Number(await token.decimals());
  } catch (e) {
    tokenDecimals = 18;
    log(t("decimalsFallback"));
  }

  $("wallet").textContent = userAddress;
  await refreshNetwork();
  await refreshMyData();
  log(t("walletConnected"));
  log(t("currentContract", { address: STAKING_ADDRESS }));

  setConnectedUI(true);

  if (!listenersBound) {
    listenersBound = true;
    try {
      injectedEthereum.on("accountsChanged", async (accounts) => {
        if (!accounts || accounts.length === 0) {
          disconnectWallet();
          return;
        }
        // account switched
        try {
          signer = provider.getSigner();
          userAddress = await signer.getAddress();
          staking = new ethers.Contract(STAKING_ADDRESS, STAKING_ABI, signer);
          const tokenAddr = await staking.stakeToken();
          token = new ethers.Contract(tokenAddr, ERC20_ABI, signer);
          $("wallet").textContent = userAddress;
          await refreshNetwork();
          await refreshMyData();
          log(t("accountChanged"));
        } catch (e) {
          log(t("accountChangedFail", { error: e?.message || e }));
        }
      });

      injectedEthereum.on("chainChanged", async () => {
        try {
          await refreshNetwork();
          if (isConnected) await refreshMyData();
          log(t("networkChanged"));
        } catch (e) {
          log(t("networkChangedFail", { error: e?.message || e }));
        }
      });
    } catch (e) {
      // ignore listener errors
    }
  }
}

async function toggleConnect() {
  if (isConnected) {
    disconnectWallet();
    return;
  }
  await connectWallet();
}

async function refreshNetwork() {
  const net = await provider.getNetwork();
  const text = `${net.name} (chainId=${net.chainId})`;
  $("network").textContent = text;
  if (Number(net.chainId) !== BSC_MAINNET_CHAIN_ID) {
    log(t("notOnMainnetWarn"));
  }
}

async function switchToBscTestnet() {
  const eth = injectedEthereum || getInjectedEthereum();
  if (!eth) throw new Error(t("noWallet"));
  try {
    await eth.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }]
    });
  } catch (err) {
    if (err.code === 4902) {
      await eth.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: "0x38",
          chainName: "BSC Mainnet",
          nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
          rpcUrls: ["https://bsc-dataseed1.binance.org/"],
          blockExplorerUrls: ["https://bscscan.com"]
        }]
      });
    } else {
      throw err;
    }
  }
  if (provider) await refreshNetwork();
  log(t("switchedMainnet"));
}

async function refreshMyData() {
  if (!signer || !staking || !token) throw new Error("Please connect your wallet first");
  try {
    const balance = await token.balanceOf(userAddress);
    $ ("linkBalance").textContent = formatAmount(balance);
  } catch (e) {
    $ ("linkBalance").textContent = t("readFailed");
    log(`Failed to read LINK balance: ${e.message || e}`);
  }

  try {
    const allowance = await token.allowance(userAddress, STAKING_ADDRESS);
    $ ("allowance").textContent = formatAmount(allowance);
  } catch (e) {
    $ ("allowance").textContent = t("readFailed");
    log(`Failed to read allowance: ${e.message || e}`);
  }

  try {
    const count = await staking.getStakesCount(userAddress);
    $ ("myStakeCount").textContent = count.toString();
  } catch (e) {
    $ ("myStakeCount").textContent = t("readFailed");
    log(`Failed to read stake count: ${e.message || e}`);
  }

  // Also refresh team data
  if (isConnected) {
    await refreshTeamData();
  }
}

async function refreshTeamData() {
  if (!signer || !staking) throw new Error("Please connect your wallet first");
  try {
    const agentInfo = await staking.getAgentInfo(userAddress);
    const teamCount = await staking.getTeamCount(userAddress);
    const downlineAgents = await staking.getDownlineAgents(userAddress);

    // Update agent level
    const levelMap = {
      0: t("agentLevelNone"),
      1: t("agentLevel1"),
      2: t("agentLevel2"),
      3: t("agentLevel3"),
      4: t("agentLevel4"),
      5: t("agentLevel5")
    };
    const levelEl = $ ("agentLevel");
    if (levelEl) levelEl.textContent = levelMap[agentInfo[0]] || t("agentLevelNone");

    // Update team count
    const teamCountEl = $ ("teamCount");
    if (teamCountEl) teamCountEl.textContent = teamCount.toString();

    // Update pending rewards
    const pendingEl = $ ("pendingRewards");
    if (pendingEl) pendingEl.textContent = formatAmount(agentInfo[3]);

    // Update agent status
    const statusEl = $ ("agentStatus");
    if (statusEl) statusEl.textContent = agentInfo[6] ? t("agentStatusActive") : t("agentStatusInactive");

    // Update downline count
    const downlineEl = $ ("downlineCount");
    if (downlineEl) downlineEl.textContent = downlineAgents.length.toString();

    // Update team detail
    const detailEl = $ ("teamDetail");
    if (detailEl) {
      const detail = {
        level: levelMap[agentInfo[0]] || t("agentLevelNone"),
        teamCount: teamCount.toString(),
        pendingRewards: formatAmount(agentInfo[3]),
        totalRewards: formatAmount(agentInfo[2]),
        status: agentInfo[6] ? t("agentStatusActive") : t("agentStatusInactive"),
        downlineCount: downlineAgents.length.toString(),
        performance: formatAmount(agentInfo[5])
      };
      detailEl.textContent = JSON.stringify(detail, null, 2);
    }

  } catch (e) {
    log(`Failed to read team data: ${e.message || e}`);
    const teamIds = ["agentLevel", "teamCount", "pendingRewards", "agentStatus", "downlineCount"];
    for (const id of teamIds) {
      const el = $(id);
      if (el) el.textContent = t("noAgentData");
    }
    const teamDetail = $ ("teamDetail");
    if (teamDetail) teamDetail.textContent = t("noAgentData");
  }
}

async function approve() {
  await requireCorrectNetwork();
  const amount = parseAmount($("amount").value);

  const tx = await sendTxAdaptive(
    () => token.approve(STAKING_ADDRESS, amount),
    (overrides) => token.approve(STAKING_ADDRESS, amount, overrides)
  );
  log(t("approvalSent", { hash: tx.hash }));
  await tx.wait();
  log(t("approvalSuccess"));
  toast("success", t("approvalSuccess"));
  await refreshMyData();
}

async function deposit() {
  await requireCorrectNetwork();
  const amount = parseAmount($("amount").value);

  const [myReferrer, firstUserAddr, allowance, balance] = await Promise.all([
    staking.getReferrer(userAddress),
    staking.firstUser(),
    token.allowance(userAddress, STAKING_ADDRESS),
    token.balanceOf(userAddress)
  ]);

  if (balance.lt(amount)) {
    throw new Error(t("balanceInsufficient"));
  }

  if (allowance.lt(amount)) {
    throw new Error(t("allowanceInsufficient"));
  }

  const zero = ethers.constants.AddressZero;
  const firstUserIsSet = String(firstUserAddr).toLowerCase() !== zero.toLowerCase();
  const isFirstUser = firstUserIsSet && userAddress.toLowerCase() === String(firstUserAddr).toLowerCase();
  const hasReferrer = String(myReferrer).toLowerCase() !== zero.toLowerCase();
  // If firstUser is not set yet (0x0), any address can become the first user; do not block in UI.
  if (firstUserIsSet && !isFirstUser && !hasReferrer) {
    throw new Error(t("referrerNotBound"));
  }

  const tx = await sendTxAdaptive(
    () => staking.deposit(amount),
    (overrides) => staking.deposit(amount, overrides)
  );
  log(t("depositSent", { hash: tx.hash }));
  await tx.wait();
  log(t("depositSuccess"));
  toast("success", t("depositSuccess"));
  await refreshMyData();
}

async function depositWithReferrer() {
  await requireCorrectNetwork();
  const amount = parseAmount($("amount").value);
  const referrer = $("referrer").value.trim();
  if (!ethers.utils.isAddress(referrer)) throw new Error(t("invalidReferrer"));

  const [allowance, balance, refValid] = await Promise.all([
    token.allowance(userAddress, STAKING_ADDRESS),
    token.balanceOf(userAddress),
    hasActiveStake(referrer)
  ]);

  if (balance.lt(amount)) {
    throw new Error(t("balanceInsufficient"));
  }

  if (allowance.lt(amount)) {
    throw new Error(t("allowanceInsufficient"));
  }

  if (!refValid) {
    throw new Error(t("referrerNoStake"));
  }

  const tx = await sendTxAdaptive(
    () => staking.depositWithReferrer(amount, referrer),
    (overrides) => staking.depositWithReferrer(amount, referrer, overrides)
  );
  log(t("depositRefSent", { hash: tx.hash }));
  await tx.wait();
  log(t("depositRefSuccess"));
  toast("success", t("depositRefSuccess"));
  await refreshMyData();
}

async function preview() {
  const amount = parseAmount($("amount").value);
  const result = await staking.previewNetAndInterest(amount);
  const pvValid = $("pvValid");
  if (pvValid) pvValid.textContent = String(result.valid);

  const base99 = result.netAmount;
  const pvBase = $("pvBase");
  if (pvBase) pvBase.textContent = formatAmount(base99);

  const pvDuration = $("pvDuration");
  if (pvDuration) pvDuration.textContent = result.duration.toString();

  const pvRate = $("pvRate");
  if (pvRate) pvRate.textContent = result.totalRateBP.toString();

  const pvInterest = $("pvInterest");
  if (pvInterest) pvInterest.textContent = formatAmount(result.interestAmount);

  const pvPayout = $("pvPayout");
  if (pvPayout) pvPayout.textContent = formatAmount(result.payoutAmount);
}

async function manualWithdraw() {
  await requireCorrectNetwork();
  const id = Number($("withdrawStakeId").value);
  if (Number.isNaN(id) || id < 0) throw new Error(t("invalidStakeId"));
  const tx = await sendTxAdaptive(
    () => staking.manualWithdrawMatured(id),
    (overrides) => staking.manualWithdrawMatured(id, overrides)
  );
  log(t("manualWithdrawSent", { hash: tx.hash }));
  await tx.wait();
  log(t("manualWithdrawSuccess"));
  toast("success", t("manualWithdrawSuccess"));
  await refreshMyData();
}

async function pressWithdraw() {
  await requireCorrectNetwork();
  const oldId = Number($("pressOldId").value);
  const newAmount = parseAmount($("pressNewAmount").value);
  if (Number.isNaN(oldId) || oldId < 0) throw new Error(t("invalidOldStakeId"));
  const tx = await sendTxAdaptive(
    () => staking.withdrawWithPressStake(oldId, newAmount),
    (overrides) => staking.withdrawWithPressStake(oldId, newAmount, overrides)
  );
  log(t("pressWithdrawSent", { hash: tx.hash }));
  await tx.wait();
  log(t("pressWithdrawSuccess"));
  toast("success", t("pressWithdrawSuccess"));
  await refreshMyData();
}

async function claimAgent() {
  await requireCorrectNetwork();
  const tx = await sendTxAdaptive(
    () => staking.claimAgentRewards(),
    (overrides) => staking.claimAgentRewards(overrides)
  );
  log(t("claimAgentSent", { hash: tx.hash }));
  await tx.wait();
  log(t("claimAgentSuccess"));
  toast("success", t("claimAgentSuccess"));
  await refreshMyData();
}

async function queryStake() {
  const id = Number($("queryStakeId").value);
  if (Number.isNaN(id) || id < 0) throw new Error(t("queryStakeInvalid"));
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

async function run(actionLabel, action) {
  try {
    await action();
  } catch (e) {
    const msg = formatActionError(actionLabel, e);
    log(msg);
    toast("error", msg);
  }
}

$("connectBtn").onclick = () => run(isConnected ? t("disconnectAction") : t("connectAction"), toggleConnect);
$("switchChainBtn").onclick = () => run(t("switchNetworkAction"), switchToBscTestnet);
$("refreshMyBtn").onclick = () => run(t("refreshData"), refreshMyData);
$("approveBtn").onclick = () => run(t("approveAction"), approve);
$("depositBtn").onclick = () => run(t("depositAction"), deposit);
$("depositWithRefBtn").onclick = () => run(t("depositWithRefAction"), depositWithReferrer);
$("previewBtn").onclick = () => run(t("previewAction"), preview);
$("manualWithdrawBtn").onclick = () => run(t("manualWithdrawAction"), manualWithdraw);
$("pressWithdrawBtn").onclick = () => run(t("pressWithdrawAction"), pressWithdraw);
$("claimAgentBtn").onclick = () => run(t("claimAgentAction"), claimAgent);
$("queryStakeBtn").onclick = () => run(t("queryStakeAction"), queryStake);
$ ("langToggleBtn").onclick = () => toggleLanguage();
  $ ("refreshTeamBtn").onclick = () => run(t("refreshTeamBtn"), refreshTeamData);

// Initialize
applyLanguage();
setConnectedUI(false);
resetUI();



