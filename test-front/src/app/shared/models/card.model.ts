export class CardModel {

  color: string;
  value: string;

  constructor(object?: CardModel) {
    if (object) {
      this.color = object.color;
      this.value = object.value;
    }
  }
}
