serenade
  .language("javascript")
  .snippet(
    "add const function <%identifier%>",
    "const <%identifier%> = (<%cursor%>) => {\n\n}"
  )

serenade
  .language("javascript")
  .snippet(
    "insert ternary <%condition%>",
    "<%condition%> ? <%cursor%> : ",
    { condition: ["condition", "pascal"], },
    'inline'
  )

serenade.language("javascript").text("spread", "...")
serenade.language("javascript").text("nullish", "??")

serenade
  .language("javascript")
  .text("insert typeof", "typeof ")
