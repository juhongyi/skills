export const Cmux = async ({ $, client }) => {
  const notify = async (title, body) => {
    try {
      await $`cmux notify --title ${title} --body ${body}`
    } catch (error) {
      if (error?.name !== "ShellError") throw error
    }
  }

  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool !== "question") return

      const body =
        output.args.questions?.map((q) => q.question).join("\n") ||
        "Question needs input"

      await notify("OpenCode | Question", body)
    },
    event: async ({ event }) => {
      if (event.type === "permission.asked") {
        await notify(
          "OpenCode | Request",
          event.properties.permission,
        )
      }
      if (
        event.type === "session.status" &&
        event.properties.status.type === "idle"
      ) {
        const { data: session } = await client.session.get({
          path: { id: event.properties.sessionID },
        })

        if (session?.parentID) return

        await notify("OpenCode | Done", "Task complete")
      }
    },
  }
}
