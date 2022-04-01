import { Component, OnInit, NgZone } from '@angular/core';
import { MathQuestion } from '../../../question';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {


  // Member variables
  questions: MathQuestion[] = [];
  activeQuestion: MathQuestion;
  isCorrect: boolean;
  feedback: string;
  questionCounter: number = 0;
  optionCounter: number;
  startTime: Date;
  endTime: Date;
  duration: number;




  setQuestion() {
    console.log(this.questionCounter);
    if (this.questionCounter === this.questions.length) {
      this.endTime = new Date();
      this.duration = this.endTime.getTime() - this.startTime.getTime();
      this.router.navigateByUrl('result/' + this.duration);
      this.ngOnInit();
      console.log('loppu');
    } else {
      this.optionCounter = 0;
      this.feedback = '';
      this.isCorrect = false;
      this.activeQuestion = this.questions[this.questionCounter];
      this.questionCounter++;
    }
  }

  checkOption(option: number, activeQuestion: MathQuestion) {
    this.optionCounter++;
    if (this.optionCounter > activeQuestion.options.length) {
      this.setQuestion();
    }
    if (option === activeQuestion.correctOption) {
      this.isCorrect = true;
      this.feedback = activeQuestion.options[option] +
      '  Está correto! Clique na lâmpada uma vez!';
    } else {
      this.isCorrect = false;
      this.feedback = 'Incorreto. Número de chances que restam: ' +
        (this.activeQuestion.options.length - this.optionCounter);
    }
  } 
  ngOnInit() {
    this.getQuestions();
    this.questionCounter = 0;
    this.setQuestion();
    this.startTime = new Date();
  }

  getQuestions() {
    this.questions = [{
      quote: 'Um resistor ôhmico, de resistência igual a 10 Ω, é atravessado por uma corrente elétrica de 1,0 A. Determine a queda de potencial que uma corrente elétrica sofre ao passar por esse resistor',
      options: [
        '5 V',
        '20 V',
        '25 V',
        '10 V'],
        correctOption: 3
    },
    {
      quote: 'Quando atravessado por uma corrente elétrica de 1,5 mA, a diferença de potencial nos terminais de um resistor ôhmico é de 1,5 V. Qual o módulo da resistência elétrica desse resistor?',
      options: [
        '1.10-³ Ω',
        '1.10³ Ω',
        '1,5.10³ Ω',
        '1 Ω'],
      correctOption: 1
    },
    {
      quote: 'Um circuito tem 3 resistores idênticos, dois deles colocados em paralelo entre si, e ligados em série com o terceiro resistor e com uma fonte de 12V.A corrente que passa pela fonte é de 5,0 mA.Qual é a resistência de cada resistor, em kΩ?',
      options: [
        '0,60',
        '0,80',
        '2,4',
        '1,6'],
      correctOption: 3
    },
  
    {
      quote: 'Se dobrarmos a carga acumulada nas placas de um capacitor, a diferença de potencial entre suas placas ficará:',
      options: [
        'inalterada.',
        'multiplicada por quatro.',
        'multiplicada por dois',
        'dividida por quatro.'],
      correctOption: 2
      },
      {
        quote: 'Um chuveiro elétrico é submetido a uma ddp de 220V, sendo percorrido por uma corrente elétrica de intensidade 10A. Qual é a resistência do chuveiro? ',
        options: [
          '11 Ω',
          '5,5 Ω',
          '22 Ω',
          '44 Ω'],
        correctOption: 2
        },
    {
      quote: 'Uma fonte de tensão cuja força eletromotriz é de 15 V tem resistência interna de 5 Ω. A fonte está ligada em série com uma lâmpada incandescente e com um resistor. Medidas são realizadas e constata-se que a corrente elétrica que atravessa o resistor é de 0,20 A, e que a diferença de potencial na lâmpada é de 4 V.Nessa circunstância, as resistências elétricas da lâmpada e do resistor valem, respectivamente,',
      options: [
        '0,8 Ω e 50 Ω.',
        '20 Ω e 50 Ω.',
        '0,8 Ω e 55 Ω',
        '20 Ω e 70 Ω'],
      correctOption: 1
    },
      
    ];

  }



  constructor(public router: Router) {}

}