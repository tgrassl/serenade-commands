serenade.app("chrome").command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["commandOrControl"])
  await api.typeText(matches.text)
})

serenade.app("chrome").command("reopen tab", async (api, matches) => {
  await api.pressKey("t", ["commandOrControl", 'shift'])
})