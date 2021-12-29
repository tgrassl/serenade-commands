serenade.global().command("zoom in", async (api) => {
  await api.pressKey("+", ["commandOrControl"])
})

serenade.global().command("zoom out", async (api) => {
  await api.pressKey("-", ["commandOrControl"])
})

serenade.global().command("double click", async (api) => {
  await api.click('left', 2)
})

serenade.global().command("drag", async (api) => {
  await api.mouseDown('left')
})

serenade.global().command("release", async (api) => {
  await api.mouseUp('left')
})