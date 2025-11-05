import './articleTagColors.css'
export const articleTagColors = {"Crack":"39wi","Vue":"39wi","Workflow":"laor","Spider":"ee98","Auto.js":"7ssk","vue":"39wi","English":"397o","Deep Learning":"nzm1","计算机网络":"qtu8","C/C++":"4q2x","Latex":"wnwj","Mysql":"397o","Python":"397o","Conda":"vs0z","Git":"cc8e","Wsl":"cc8e"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
