# vue3-how-to-communicate-between-components

- Vue.js 3에서 컴포넌트 간 통신을 어떻게 할까 (사실 버전 3.2 이상임)

## 왜 만들었나

- 뷰 컴포넌트 간 통신을 어떻게 할까

- 주말간 고민만 하다 늙어 죽을 것 같아 직접 예제코드 작성

- 뷰 공식 문서는 너무 뜬구름

## 결론부터 말해

1. 핵심 로직이 주로 부모 컴포넌트에 존재한다면 event(emit) 방식이 효율적

1. 자식 컴포넌트들의 독립적 로직이 핵심이라면 expose 방식이 효율적

1. 기능 추가를 해야 하는데 컴포넌트 구조 변경이 너무 어렵다면 provide/inject 방식을 고려할 수 있음

1. 자식 컴포넌트 끼리 통신해야 하는 상황이라면 store 패턴이 어울릴 수도 (그러라고 있는거 아닌데)

1. 객체 이용 시 reactivity를 유지하는 것은 편리하지만 side effect를 심하게 발생시키므로 매우 주의하여 사용

1. (사견) 유지보수를 생각한다면 컴포넌트 외부에서 변경이 불가능한 expose 패턴이 좋아보임. 간단한건 그냥 v-model event emit 으로 ㄱㄱ.

## Usage

### requirement

- node >= 18

### command

```sh
git clone https://github.com/rpdladps/vue3-how-to-communicate-between-components.git
cd vue3-how-to-communicate-between-components
npm install
npm run dev
```

## 자세한 설명

- 은 코드를 직접 열어보면 좋지요...

- 코드들은 Composition API로 작성했습니다. 이해바랍니다..........

### reactive()

- 부모 컴포넌트에서 객체 생성

```js
// Using reactive
import { reactive } from 'vue'
const obj = reactive({ id: 'admin', pw: '1234', })

// or using ref()
const obj = { id: ref('test'), pw: ref('maga') }
```

- 자식 컴포넌트에 객체 전달

```html
<!-- Parent component's template-->
<!-- ... -->
<ChildComponent :data="obj" />
<!-- ... -->
```

- 전달받은 객체를 풀어서 직접 사용

```js
// Child components
//...
const props = defineProps(['obj'])
const { id, pw, name } = toRefs(props.obj)

id.value = ...
watch( () => pw.value, () => { ...
//...
```

- (주의) 값 변경 시, 객체가 전달된 곳 모두 값 변경

- 전가의 보도

### defineEmits()

- 부모 컴포넌트에서 이벤트 콜백을 정의한다

```html
<!-- Parent component's template -->
<!-- ... -->
<Component1Vue :msg="msg" @update:msg="updateMsg" @clear:msg="clearMsg" @random:msg="randomMsg" />
<!-- ... -->
```

- 자식 컴포넌트에서 이벤트 호출 - 콜백 실행

```js
// Child components
//...
const props = defineProps(['msg'])
const emit = defineEmits(['update:msg', 'clear:msg', 'random:msg'])
//...
```

- prop 갯수가 적을 때 유리함

- 자손 컴포넌트까지 전달되려면 이벤트 콜백 등록, 이벤트 호출 반복해야함

### defineExpose()

- 자식 컴포넌트에서 expose될 reactive, 리터럴, 함수 지정 가능

```js
//...
const constant = ref(Math.random())
const makeRandomConstant = () => constant.value = Math.random()
const getMsg = () => msg.value
const makeRandomMsg = () => msg.value = Math.random().toString()
const removeMsg = () => msg.value = ''
defineExpose({ constant, makeRandomConstant, msg, getMsg, makeRandomMsg, removeMsg, })
//...
```

- 부모 컴포넌트에서 ref에 컴포넌트 등록 후, expose된 이름들 호출 가능

- 이 패턴이 react랑 좀 비슷한 것 같기도 함 (리액트..안배워서....잘..몰...루....JSX가..뭥..)

- (중요) expose는 기본적으로 외부에서 변경불가임

- 컴포넌트의 데이터를 변경하려면 getter, setter를 선언 한 후 expose 해야 함

- mount되어야 컴포넌트 ref에 접근할 수 있으므로, 부모 컴포넌트에서 까다로운 처리가 필요함

```html
<!-- ... -->
<Component1Vue :msg="msg" ref="child" />
<!-- ... -->
```

```js
//...
const nestedMakeRandomMsg = () => { nestedChild.value.makeRandomMsg(); nestedGetMsg() }
const nestedRemoveMsg = () => { nestedChild.value.removeMsg(); nestedGetMsg() }
onMounted(() => {

    viewNestedConstant.value = nestedChild.value.constant    
    watch(
        () => nestedChild.value.constant,
        (x) => {
            viewNestedConstant.value = x
        }
    )

    rawNestedMsg.value = nestedChild.value.msg
    watch(
        () => nestedChild.value.msg,
        (x) => {
            rawNestedMsg.value = x
        }
    )
})
//...
```

### provide() / inject()

- 부모 / 자식 컴포넌트 관계에서만 작동 (자식 / 부모 관계는 작동되지 않음)

- Parent : provide() / child : inject()

- 중간단계의 자손 컴포넌트를 뛰어넘을 수 있다는 점이 가장 큰 장점.

- 전달자의 reactivity를 유지시킬 수 있기 때문에, reactive 패턴과 마찬가지로 매우 유용하게 쓰일 수 있음. (goto 급 ㄷㄷ..)

- 단점은 남용 시 스파게티 코드 될 가능성 농후... goto와 유사한 문제를 가지고 있음.

- 전역변수처럼 사용하고 싶다면 싱글톤 패턴을 사용하자.

### useStore() with Pinia

- 추가 중
