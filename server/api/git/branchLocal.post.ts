import { simpleGit } from 'simple-git'
import { gitPath } from '~/server/constant'


export default defineEventHandler(async () => {
  return getBranchLocal()
})

export  function getBranchLocal(){
  const git = simpleGit(gitPath, {binary: 'git'})

  return git.branchLocal()
}