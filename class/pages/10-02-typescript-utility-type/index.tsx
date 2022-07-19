export default function TypeScriptPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // 유틸리티 타입
  // 1. Pick 타입 (고름)
  type IProfile2 = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 (제거)
  type IProfile3 = Omit<IProfile, "school">;

  // 3. Partial 타입 (있어도되고 없어도되는)
  type IProfile4 = Partial<IProfile>;

  // 4. Required 타입(필수)
  type IProfile5 = Required<IProfile>;

  // 5. Record 타입
  type ZZZ = "aaa" | "qqq" | "rrr"; // Union 타입(합집합)
  let apple: ZZZ;
  apple = "qqq";
  type IProfile6 = Record<ZZZ, IProfile>; // <키,벨류>

  /* ===== (type vs interface) 선언병합의 차이 ===== */
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.age = 10;
  profile.candy = 5;
  return <div>타입 스크립트</div>;
}
