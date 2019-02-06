
class Note {
  constructor(_id, _title, _content, _favourite){
    this.id = _id
    this.title = _title
    this.content = _content
    this.created = new Date()
    this.favourite = _favourite
    this.labels = [],
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

Object.defineProperty ( Note, 'favourite',{
  get: function(){
    return this.favourite
  },
  set : function(_favourite){
    this.favourite = _favourite
  }
})

class Label {
  constructor(_name, _color){
    this.name = _name
    this.color = {background: _color}
  }
  
  toString(){
    return JSON.stringify(this)
  }
}

Object.defineProperty ( Label, 'name',{
  get: function(){
    return this.name
  },
  set : function(_name){
    this.name = _name
  }
})

Object.defineProperty ( Label, 'color',{
  get: function(){
    return this.color
  },
  set : function(_color){
    this.color = {background: _color}
  }
})

Vue.filter('date', time => moment(time) .format('DD/MM/YY, HH:mm'))

const vue = new Vue({
  name: 'layout',
  el: '#layout',
  data() {
    return {
      activateClass: false,
      lastId: 0,
      currentNote: {},
      notes: [],
      selectedIndex: 0,
      labels: [],
      selectedLabelIndex: -1
    }
  },
  computed:{
    notePreview(){
      // console.log(`notePreview ${this.note.content}`)
      // return marked(this.note.content)
    },
    filterNoteItems(){
      if (this.selectedLabelIndex == -1){
        console.log('-1')
        return this.notes
      } else {
        console.log('notes')
        return this.notes.filter(note=>_.some(note.labels, this.labels[this.selectedLabelIndex]))
      }
    }
  },
  watch: {
    currentNote: {
      handler(value, oldValue) {
        this.$refs.noteTitle.innerHTML = this.currentNote.title
        this.$refs.noteContent.innerHTML = this.currentNote.content
        this.saveNote()
      },
      deep: true
    }
  },
  methods:{
    addNoteLabel(note, label){
      if (!_.some(note.labels, label)){
        console.log('hey')
        note.labels.push(label)
      }
    },
    resetLabelIndex(){
      this.selectedLabelIndex = -1
    },
    toggleLabelIndex(index){
      this.selectedLabelIndex = index
    },
    saveNote() {
      if (this.currentNote.favourite){
        localStorage.setItem(this.currentNote.customId, this.currentNote)
        console.log(`saved ${JSON.stringify(this.currentNote)}`);
      }
    },
    itemSelected(index){
      return index == this.selectedIndex
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
    bindNote(){
      this.currentNote.title = this.$refs.noteTitle.innerHTML
      this.currentNote.content = this.$refs.noteContent.innerHTML
      this.saveNote()
    },
    editNote(index){
      this.selectedIndex = index
      this.currentNote = this.notes[index]
    }
  },
  created() {
    this.addNote()
    this.labels.push(new Label('personal','#ffc94c'))
    this.labels.push(new Label('work','#41ccb4'))
    this.labels.push(new Label('travel','#40c365'))
  }
})

