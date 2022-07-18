export default function TypeScriptPage() {
    
    //타입 추론
    let aaa = "안녕하세요" // 처음에 들어간 값으로 자동 지정 (타입 추론)
    
    //타입 명시
    let bbb: string = "반갑습니다";
    
    //문자 타입 (선언과 할당 분리)
    let ccc: string
    ccc = "반가워요!"

    //숫자 타입
    let ddd: number = 10
    // ddd = "철수"

    //불린 타입
    let eee: boolean = true
    eee = false
    // eee = "false" // true (문자열안에 뭐 하나라도 있으면 true)

    //배열 타입
    // let fff: number[] = [1, 2, 3, 4, 5, "안녕"] //안녕 x
    // let ggg: string[] = ["철수", "영희", "훈이", 10] //10 x
    let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; //가능
    
    //객체 타입
    interface IProfile { 
        name: string
        age: number | string
        school : string
    }
    const profile: IProfile = {
      name: "철수",
      age: 8,
      school: "다람쥐초등학교",
    };
    profile.name = "영희"
    profile.age = "8살" 

    //함수 타입
    const add = (num1 : number, num2 : number, unit: string): string=> {
        return num1 + num2 + unit
    }
    const result = add(1, 2, "원") // 결과의 타입도 예측 가능 
    // add("100원", "200원")

    //애니 타입 (쓰지말기)
    let qqq: any = "철수" //js와 동일
    qqq = 123
    qqq = true



    
    return (
        <div>타입 스크립트</div>
    )
}