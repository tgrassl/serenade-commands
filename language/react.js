serenade.language("javascript").snippet(
  "add component <%name%>",
  "const <%name%> = (): JSX.Element => {\n  <%cursor%>\n}",
  { name: ["identifier", "pascal"], }
)

serenade
  .language("javascript")
  .snippet(
    "add state <%getter%> set <%setter%>",
    "const [<%getter%>, set<%setter%>] = useState(<%cursor%>)",
    { getter: ["identifier", "camel"], setter: ["identifier", "pascal"] }
  )

serenade
  .language("javascript")
  .snippet(
    "add state <%getter%> set <%setter%> value <%expression%>",
    "const [<%getter%>, set<%setter%>] = useState(<%expression%>)",
    { getter: ["identifier", "camel"], setter: ["identifier", "pascal"] }
  )

serenade.language("javascript").snippet("add use effect", "useEffect(() => {\n  <%cursor%>\n}, [])")

serenade
  .language("javascript")
  .snippet("add import classnames", 'import classNames from "classnames"', {}, "import")

serenade
  .language("javascript")
  .snippet("add import react", 'import React from "react"', {}, "import")
