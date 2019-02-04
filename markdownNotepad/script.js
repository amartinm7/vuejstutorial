
const vue = new Vue({
  name: 'notebook',
  el: '#notebook',
  data() {
    return {
      content: '',
      moreContent: 'more content',
      note : {},
      lastId: 0,
    }
  },
  computed:{
    notePreview(){
      return marked(this.content)
    }
  },
  watch: {
    content: {
      handler(value, oldValue){
        this.saveNote(value, oldValue)
      }
    },
    moreContent: 'saveNote'
  },
  methods:{
    saveNote(value, oldValue) {
      console.log(`new note: ${value}, old note: ${oldValue}`)
      localStorage.setItem('content', value)
      this.reportOperation('saving')
    },
    reportOperation (opName) {
      console.log(`The ${opName} operation was completed!`)
    },
    clear(){
      this.content = ''
    },
    newNote(){
      const note = new Note(this.lastId++, 't', 'hello', true)
      this.note = note
    },
    favourite(){
      localStorage.setItem(this.content.id, content)
    }
  },
  created() {
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  }
})

class Note {
  constructor(id, title, content, favorite){
    this.id = id
    this.title = title
    this.content = content
    this.created = new Date()
    this.favorite= favorite
  }
  
  toString(){
    return JSON.stringify(this)
  }
  
}
