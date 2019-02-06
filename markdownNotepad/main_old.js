


const vue = new Vue({
  name: 'layout',
  el: '#layout',
  data() {
    return {
      activateClass: false,
      lastId: 1,
      currentNote: {
        id:0,
        title: 'new note...',
        content: 'write the content here...',
        favorite: false,
        created: {}
      },
      notes: [
        {
          id:0,
          title: 'new note...',
          content: 'write the content here...',
          favorite: false,
          created: {}
        }
      ],
      selectedIndex: 0
    }
  },
  computed:{
    notePreview(){
      // console.log(`notePreview ${this.note.content}`)
      // return marked(this.note.content)
    }
  },
  watch: {
    notes: {
      handler(value, oldValue) {
        // this.saveNote(value, oldValue)
      }
    }
  },
  methods:{
    toogleClass(){
      this.activateClass = !this.activateClass;
    },
    // saveNote(value, oldValue) {
    //   console.log(`new note: ${value}, old note: ${oldValue}`)
    //   localStorage.setItem('content', value)
    //   this.reportOperation('saving')
    // },
    // reportOperation (opName) {
    //   console.log(`The ${opName} operation was completed!`)
    // },
    addNote(){
      this.notes.push( new Note(this.lastId++, 'new note...', 'write the content here...', false) )
    },
    removeNote(index){
      console.log(index)
      this.notes.splice(index,1)
    },
    favourite(){
      // localStorage.setItem(this.content.id, content)
    },
    bindNote(){
      this.notes[this.selectedIndex].title = this.$refs.noteTitle.innerHTML
      this.notes[this.selectedIndex].content = this.$refs.noteContent.innerHTML
    },
    editNote(index){
      this.selectedIndex = index
    }
  },
  mounted() {
    // this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  }
})



class Note {
  constructor(_id, _title, _content, _favorite){
    this.id = _id
    this.title = _title
    this.content = _content
    this.created = new Date()
    this.favorite= _favorite
  }
  
  
  toString(){
    return JSON.stringify(this)
  }
}

Object.defineProperty ( Note, 'id',{
  get: function(){
    return this.id
  },
  set : function(_id){
    this.id = _id
  }
})

Object.defineProperty ( Note, 'title',{
  get: function(){
    return this.title
  },
  set : function(_title){
    this.title = _title
  }
})

Object.defineProperty ( Note, 'content',{
  get: function(){
    return this.content
  },
  set : function(_content){
    this.content = _content
  }
})
