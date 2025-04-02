// A Proyx Concept Example

interface ISubject {
  // An interface implemented by both the Proxy and Real Subject
  request(): number[];
  // A method to implement
}

class RealSubject implements ISubject {
  // The actual real object that the proxy is representing

  enourmousData: number[];

  constructor() {
    //  hypothetically enormous amounts of data
    this.enourmousData = [1, 2, 3];
  }

  request() {
    return this.enourmousData;
  }
}

class ProxySubject implements ISubject {
  // In this case the proxy will act as a cache for
  //`enormous_data` and only populate the enormous_data it
  // is actually necessary

  enormounsData: number[];
  realSubject: RealSubject;

  constructor() {
    this.enormounsData = [];
    this.realSubject = new RealSubject();
  }

  request(): number[] {
    // Using the proxy as a cache, and loading data into it only if
    // it is needed
    if (this.enormounsData.length === 0) {
      console.log("pulling data from RealSubject");
      this.enormounsData = this.realSubject.request();
      return this.enormounsData;
    }
    console.log("pulling data from Proxy cache");
    return this.enormounsData;
  }
}

// The Client
const PROXY_SUBJECT = new ProxySubject();
// use the Subject. First time it will load the enormous amount of data
console.log(PROXY_SUBJECT.request());
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request());
