//// included by "vs/workbench/workbench.main.ts"

// Settings support
import 'vs/kendryte/vs/workbench/config/browser/categoryContribution';
import 'vs/kendryte/vs/workbench/config/electron-browser/pathSettingsContribution';
import 'vs/kendryte/vs/workbench/config/common/flashSettingsContribution';
import 'vs/kendryte/vs/workbench/config/browser/internalSettingsCategoryContribution';
import 'vs/kendryte/vs/platform/config/common/registry';
// Settings Content
import 'vs/kendryte/vs/workbench/cmake/common/configFile';
import 'vs/kendryte/vs/workbench/serialMonitor/common/configContribution';
import 'vs/kendryte/vs/workbench/serialUpload/common/configContribution';
import 'vs/kendryte/vs/platform/openocd/common/openocd';
import 'vs/kendryte/vs/platform/openocd/common/jtag';
import 'vs/kendryte/vs/platform/openocd/common/ftdi';
import 'vs/kendryte/vs/platform/openocd/common/custom';
// ipc channel (client)
import 'vs/kendryte/vs/services/ipc/browser/ipcChannelWorkbench';
// Logger
import 'vs/kendryte/vs/services/channelLogger/electron-browser/service';
// Misc Services
import 'vs/kendryte/vs/services/github/node/githubServiceContribution';
import 'vs/kendryte/vs/services/path/electron-browser/contribution';
import 'vs/kendryte/vs/services/fileCompress/electron-browser/contribution';
import 'vs/kendryte/vs/services/fileSystem/node/nodeFileSystemService';
import 'vs/kendryte/vs/services/download/node/nodeRequestService'; // network request
import 'vs/kendryte/vs/services/download/electron-browser/nodeDownloadService'; // download
import 'vs/kendryte/vs/services/download/electron-browser/downloadWithProgressService'; // download
import 'vs/kendryte/vs/platform/vscode/electron-browser/relaunchRenderService';
// Settings Page Patcher
// import 'vs/kendryte/vs/workbench/patchSettings2/browser/settingsTreePathcer';
// import 'vs/kendryte/vs/workbench/patchSettings2/browser/registerTypes';
// IO Config
import 'vs/kendryte/vs/workbench/fpioaConfig/node/generateorContribution';
import 'vs/kendryte/vs/workbench/fpioaConfig/electron-browser/fpioaContribution';
import 'vs/kendryte/vs/workbench/fpioaConfig/common/packagings/includeAllContribution';
// Serial Devices
import 'vs/kendryte/vs/services/serialPort/node/serialPortService';
import 'vs/kendryte/vs/services/serialPort/common/configContribution';
import 'vs/kendryte/vs/services/serialPort/common/reloadAction';
// Serial Upload
import 'vs/kendryte/vs/workbench/serialUpload/node/uploadContribution';
// Serial Monitor
import 'vs/kendryte/vs/workbench/serialMonitor/electron-browser/serialMonitorPanel';
import 'vs/kendryte/vs/workbench/serialMonitor/common/toggleSerialMonitorAction';
import 'vs/kendryte/vs/workbench/serialMonitor/electron-browser/actions/register';
// app top menus
import 'vs/kendryte/vs/workbench/topMenu/electron-browser/kendryteMenuContribution';
import 'vs/kendryte/vs/workbench/topMenu/node/shortcutsContribution';
// cmake
import 'vs/kendryte/vs/workbench/cmake/electron-browser/cmakeContribution';
// bottom buttons
import 'vs/kendryte/vs/workbench/bottomBar/electron-browser/statusBarContribution';
import 'vs/kendryte/vs/workbench/bottomBar/common/kendryteButtonContribution';
// Package Manager
import 'vs/kendryte/vs/workbench/packageManager/browser/actionsContribution';
import 'vs/kendryte/vs/workbench/packageManager/electron-browser/mainPanelContribution';
// kendryte-package-json editor
import 'vs/kendryte/vs/workbench/kendrytePackageJsonEditor/electron-browser/kendryteJsonContribution';
// OpenOCD
import 'vs/kendryte/vs/services/openocd/electron-browser/actionConfigContribution';
import 'vs/kendryte/vs/services/openocd/electron-browser/openOCDService';
// sudo
import 'vs/kendryte/vs/platform/sudo/electron-browser/register';
// updater
import 'vs/kendryte/vs/code/electron-browser/updater/register';
// bootstrap
import 'vs/kendryte/vs/workbench/bootstrap/common/kendryteBootstrap';
// open actions
import 'vs/kendryte/vs/platform/open/electron-browser/register';
// file dialog
import 'vs/kendryte/vs/platform/fileDialog/common/configContribution';
