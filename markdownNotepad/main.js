
class Note {
  constructor(_id, _title, _content, _favourite){
    this.id = _id
    this.title = _title
    this.content = _content
    this.created = new Date()
    this.favourite= _favourite
    this.customId = `note#` + _id
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


const vue = new Vue({
  name: 'layout',
  el: '#layout',
  data() {
    return {
      activateClass: false,
      lastId: 0,
      currentNote: {},
      notes: [],
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
    currentNote: {
      handler(value, oldValue) {
        this.$refs.noteTitle.innerHTML = this.currentNote.title
        this.$refs.noteContent.innerHTML = this.currentNote.content
        this.saveNote(value, oldValue)
      }
    }
  },
  methods:{
    saveNote(note) {
      if (note.favorite){
        localStorage.setItem(note.customId, note)
        console.log(`saved ${JSON.stringify(note)}`);
      }
    },
    itemSelected(index){
      return index == this.selectedIndex
    },
    isFavourite(index){
      return this.notes[index].favourite
    },
    toggleFavourite(index){
      this.notes[index].favourite = !this.notes[index].favourite
    },
    addNote(){
      this.selectedIndex = this.lastId++
      this.currentNote = new Note(this.selectedIndex, `new note #${this.selectedIndex}...`, 'write the content here...', false)
      this.notes.push(this.currentNote)
    },
    removeNote(index){
      console.log(index)
      this.notes.splice(index,1)
    },
    favourite(){
      // localStorage.setItem(this.content.id, content)
    },
    bindNote(){
      this.currentNote.title = this.$refs.noteTitle.innerHTML
      this.currentNote.content = this.$refs.noteContent.innerHTML
    },
    editNote(index){
      this.selectedIndex = index
      this.currentNote = this.notes[index]
    }
  },
  created() {
    this.addNote()
  }
})

