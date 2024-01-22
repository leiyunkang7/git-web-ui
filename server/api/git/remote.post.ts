import { simpleGit } from 'simple-git'
import { gitPath } from '~/server/constant'

export default defineEventHandler(async event => {
  const git = simpleGit(gitPath, { binary: 'git' })

  const { verbose } = await readBody(event)

  const remotes = git.getRemotes(verbose)

  return remotes
})
