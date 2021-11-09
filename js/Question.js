class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter your answer")
   //Create a input box to enter the number


    
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement("h3");
    this.Options1 = createElement("h4");
    this.Options2 = createElement("h4");
    this.Options3 = createElement("h4");
    this.Options4 = createElement("h4");
    this.message = createElement("h2");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.Question.html("What starts and ends with the letter 'E', but has only one letter?")
    this.Options1.html("1:Everyone");
    this.Options2.html("2:Envelope");
    this.Options3.html("3:Estimate");
    this.Options4.html("4:Example");
    this.Question.position(150, 80);
    this.Options1.position(150, 100);
    this.Options2.position(150, 120);
    this.Options3.position(150, 140);
    this.Options4.position(150, 160);
    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(350, 230)
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thank you, your answer has been sbmitted ");
    this.message.position(350, 350);
    })


  }
}
