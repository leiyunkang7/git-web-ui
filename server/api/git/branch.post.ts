import { simpleGit } from 'simple-git'
import type {TaskOptions} from 'simple-git'

const gitPath = '/home/leiyunkang/code/github/core'

export default defineEventHandler(async (event) => {
  // const query = getQuery<TaskOptions | undefined>(event)
  const body = await readBody<TaskOptions | undefined>(event)
  return getBranch(body)
})

export  function getBranch(options?: TaskOptions){
  const git = simpleGit(gitPath, {binary: 'git'})

  return git.branch(options)
}