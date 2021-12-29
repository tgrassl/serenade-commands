const { clearCommand, listCommand } = require("../language/bash")

serenade.app("vscode").command("open terminal", async (api) => {
  await api.pressKey("j", ["commandOrControl",])
})

serenade.app("vscode").command("close terminal", async (api) => {
  await api.pressKey("j", ["commandOrControl",])
})

serenade.app("vscode").command("rename", async (api) => {
  await api.pressKey("f2", ["function",])
})

serenade.app("vscode").command("clear", clearCommand)

serenade.app("vscode").command("list", listCommand)

serenade.app("vscode").command("explorer", async (api) => {
  await api.pressKey("e", ["commandOrControl", "shift"])
})

serenade.app("vscode").command("search", async (api) => {
  await api.pressKey("f", ["commandOrControl", "shift"])
})

serenade.app("vscode").command("git", async (api) => {
  await api.pressKey("g", ["commandOrControl", "shift"])
  await api.pressKey("g")
})
