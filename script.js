var app = new Vue({
  el: '#app',
  data: {
    input: null,
    links: [],
    message: {},
    output: null,
    windows: []
  },
  methods: {
    formatData() {
      this.message = {}

      if (!this.basePath || !this.username || !this.userpassword) {
        this.message = {
          text: 'Please select valid session.js file.',
          status: 'yellow'
        }
        return false
      }
    },
    filesChange(fileName, filesData) {
      const reader = new FileReader()
      //   const sessionData = {}
      console.log(filesData)
      reader.onload = (e) => {
        console.log(e)
        console.log(this.input)
        this.formatData(JSON.parse(e.target.result))
      }
      reader.readAsText(filesData['0'])
    },
    formatData(data) {
      //if data && Array.isArray(data.windows)
      //   this.input = data
      data.windows.forEach((window, wi) => {
        this.windows.push([])
        if (window.tabs) {
          this.windows[wi].tabs = []
          window.tabs.forEach((tab, ti) =>
            this.windows[wi].tabs.push({
              id: ti,
              title: tab.entries['0'].title,
              url: tab.entries['0'].url
            })
          )
        }
      })
      console.log(this.windows)
    }
  }
})
