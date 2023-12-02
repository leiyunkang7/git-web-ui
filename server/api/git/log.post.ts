import { simpleGit } from 'simple-git'
import type {TaskOptions, LogOptions} from 'simple-git'
import { gitPath } from '~/server/constant'


export async function getLog(options?: TaskOptions | LogOptions){
  const git = simpleGit(gitPath, {binary: 'git'})

  return git.log(options)
}
export default defineEventHandler(async (event) => {
  const body = await readBody<TaskOptions | LogOptions | undefined>(event)

  return getLog(body)
})