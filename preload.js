const { contextBridge, ipcRenderer } = require('electron')

//context bridge creates a safe bi directional, synchronous bridge across isolated contexts
// https://www.electronjs.org/docs/latest/api/context-bridge

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
  ping: () => ipcRenderer.invoke('ping')
})

/*
Notice how we wrap the ipcRenderer.invoke('ping') call in a helper function rather than expose the ipcRenderer module directly via context bridge. You never want to directly expose the entire ipcRenderer module via preload. This would give your renderer the ability to send arbitrary IPC messages to the main process, which becomes a powerful attack vector for malicious code.
*/