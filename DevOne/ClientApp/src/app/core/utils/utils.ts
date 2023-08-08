export class Utils {
  public static changeColorClassOfWordsById(elementId: string, words: Array<string>, className: string) {
    const element = document.getElementById(elementId);
    if (element) {
      words.forEach(mot => {
        const regex = new RegExp(`\\b${mot}\\b`, 'gi');
        element.innerHTML = element.innerHTML.replace(regex, `<span class="${className}">${mot}</span>`);
      });
    }
    console.log(element);
  }

  public static getAge(birthdayDate: Date): number {
    const currenDate = new Date();
    let age = currenDate.getFullYear() - birthdayDate.getFullYear();
    const currentMonth = currenDate.getMonth();
    const birthdayMonth = birthdayDate.getMonth();

    // Check if the birthday hasn't passed yet this year
    if (currentMonth < birthdayMonth || (currentMonth === birthdayMonth && currenDate.getDate() < birthdayDate.getDate())) {
      age--;
    }

    return age;
  }
}
