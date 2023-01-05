class Helper {
  public static getSomething(): string {
    return 'something';
  }
}

document.body.innerHTML = Helper.getSomething();
