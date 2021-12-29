const clearCommand = async (api) => {
  await api.typeText("clear")
  await api.pressKey("enter")
}

const listCommand = async (api) => {
  await api.typeText("ls -a")
  await api.pressKey("enter")
}

const cdCommand = async (api) => {
  await api.typeText("cd ")
}

const cdTextCommand = async (api, cmd) => {
  await cdCommand(api)
  await api.typeText(cmd.text)
  await api.pressKey("tab")
}

serenade.language("bash").command("list", listCommand)

serenade.language("bash").command("file copy", async (api) => {
  await api.typeText("cp ")
})

serenade.language("bash").command("clear", clearCommand)

serenade.language("bash").command("pwd", async (api) => {
  await api.typeText("pwd")
  await api.pressKey("enter")
})

serenade.language("bash").command("ssh", async (api) => {
  await api.typeText("ssh ")
})

serenade.language("bash").command("cd", cdCommand)

serenade.language("bash").command("cd <%text%>", cdTextCommand)

module.exports = { clearCommand, listCommand, cdCommand, cdTextCommand }
