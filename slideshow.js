let app = new Vue ({
  el: "#container",
  data: {
    corrente: 0,
    slideArr: [
      {
        image: "img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
      },
      {
        image: "img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum"
      },
      {
        image: "img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        image: "img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
      },
      {
        image: "img/05.jpg",  
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
      }
    ],
    scorri: null
  },
  methods: {
    active: function(slideIndex) {
      if(slideIndex == this.corrente) {
        return "active";
      }
      return "";
    },
    thumbnailActive: function(slideIndex) {
      if(slideIndex == this.corrente) {
        return "thumbnail-active";
      }
      return "";
    },
    next: function() {
      this.corrente ++;
      if(this.corrente == this.slideArr.length) {
        this.corrente = 0;
      }
    },
    prev: function() {
      this.corrente --;
      if(this.corrente < 0) {
        this.corrente = this.slideArr.length - 1;
      }
    },
    viewThumbnail: function(slideIndex) {
      this.corrente = slideIndex;
    },
    play: function() {
      this.scorri = setInterval(this.next, 3000);
    },
    stop: function() {
      clearInterval(this.scorri);
    }
  },
  mounted:
    function() {
      this.play();
    }
});