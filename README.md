React → Interactive UI Interface를 만들기 위한 Library(도구) 

NextJS → 풀스택 웹 애플리케이션을 만들기 위한 구조(틀)를 제공하는 Framework

next가 실행될 때 app 폴더의 page 파일을 찾음.

### Routing

app아래 새로운 폴더를 만든 후, page 파일을 생성하면 폴더명으로 경로, page 컴포넌트가 매핑됨

존재하지 않는 URL에 매핑 될 not-found 파일

---

CSR(Client Side Rendering)

1. 최소한의 HTML만을 전송한 후, Javascript 다운로드가 완료되면 Rendering이 완료됨
2. SEO(Search Engine Optimization)에 불리함(HTML을 보기 때문)

SSR(Server Side Rendering)

1. Rendering이 완료된 HTML을 전송함
2. SEO에 최적화

### Client component

“use client”

1. 명령어를 사용하더라도 우선 SSR이 일어남
2. Hydrate가 일어나 interactive한 Interface가 될 컴포넌트에 사용

### Server component

Hydrate가 일어나지 않음.

### Hydration

Javascript 다운로드가 완료되면 HTML은 Interactive한 React(Next) Application으로 변경됨

---

### Layout

Next에서 제공하는 레이아웃, Layout은 서로 상쇄되는 것이 아니고 상위 레이아웃에 쌓여감

```tsx
    <html lang="en">
      <body>
        <Navigation/>
        {children} // page.tsx
      </body>
    </html>
```

### Metadata

폴더이름을 소괄호로 묶어주면 경로가 생성되지 않음(그룹화에 활용)

Server Component에서만 가능

page, layout이 내보낸 메타데이터는 상위 page, layout의 메타데이터와 합쳐짐

### Dynamic Routes

[]를 활용한 폴더안의 page.tsx에서 컴포넌트의 인자로 활용 가능 

---

### Data fetching

Server Component에서는 fetch된 URL을 캐싱함 → Backend에서 일어남, 데이터 갱신이 필요할 땐 revalidate를 활용해 일정한 간격으로 페이지를 재생성

### Parallel Requests

```tsx
// 병렬 fetch
const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
```

### Suspense

병렬이 아닌 비동기 처리를 위함

Suspense(React) 태그 안 컴포넌트의 fetch를 각각 실행함.

```tsx
return(
  <div>
    <Suspense fallback={<h1>Loading movie info</h1>}> fallback = Loading
      <MovieInfo id={id} /> 
    </Suspense>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieVideos id={id} /> 
    </Suspense>
  </div>
);
```

### Loading Components

loading Component를 Loading이 필요한 루트에 생성

await로 대기 중일 때 → Loading Component

완료될 때 원래 Component로 변경됨(Streaming) 

---

### CSS Modules

module.css 파일의 className을 활용

```tsx
import styles from "../app/styles/navigation.module.css";
    <nav className={styles.nav}>
```

---

### Challenge

/credits, /providers, /similar