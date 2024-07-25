import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalcService {
  // add(inputNumbers: string): number {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }


    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterLine = numbers.split('\n')[0];
      delimiter = delimiterLine.substring(2); 
      numbers = numbers.split('\n')[1]; 
    }

    numbers = numbers.replace(/\n/g, delimiter);

    const numberArray = numbers.split(delimiter);

    let sum = 0;
    let negatives: number[] = [];

    numberArray.forEach(numStr => {
      
      const num = parseInt(numStr.trim(), 10); 
      if (isNaN(num)) {
        return; // skip if not a number
      }
      if (num < 0) {
        negatives.push(num);
        return;
      }
      sum += num;
    });

  
    if (negatives.length > 0) {
      const negativeNumbers = negatives.join(', ');
      throw new Error(`Negative numbers not allowed: ${negativeNumbers}`);
    }

    return sum;
  }
}
