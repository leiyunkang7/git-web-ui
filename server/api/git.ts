import { simpleGit } from 'simple-git'

const gitPath = '/home/leiyunkang/code/github/core'

export async function getLog(){
  const git = simpleGit(gitPath, {binary: 'git'})
  return git.log()
}
export default defineEventHandler(() => {
  // return {
  //   hello: 'world'
  // }
  return getLog()
})