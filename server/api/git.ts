import { simpleGit } from 'simple-git'

export async function getLog(){
  const git = simpleGit('./', {binary: 'git'})
  return git.log()
}
export default defineEventHandler(() => {
  // return {
  //   hello: 'world'
  // }
  return getLog()
})