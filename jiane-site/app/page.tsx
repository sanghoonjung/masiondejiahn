'use client';

import { useEffect, useMemo, useState } from 'react';

const courses = [
  {
    index: '01',
    title: '참외와 루콜라',
    subtitle: '오이 · 화이트 발사믹 · 레몬 · 구운 아몬드',
    note: '차갑고 산뜻하게 입맛을 여는 여름의 첫 접시.'
  },
  {
    index: '02',
    title: '시어드 새우',
    subtitle: '콜리플라워 퓌레 · 새우 비스크 · 깻잎 오일',
    note: '새우의 단맛과 깻잎의 향을 절제해 연결한 시그니처.'
  },
  {
    index: '03',
    title: '클래식 라자냐 볼로네제',
    subtitle: '라구 · 베샤멜 · 파르미자노',
    note: '정통의 중심을 지키는 따뜻한 프리모.'
  },
  {
    index: '04',
    title: '수비드 오리가슴살',
    subtitle: '유자 발사믹 쥬 · 감자 퓌레 · 구운 제철 채소',
    note: '산미를 살린 소스와 바삭한 껍질로 마무리하는 메인.'
  }
];

const recipes = [
  {
    title: '참외와 루콜라',
    ingredients: ['참외 2개', '루콜라 120g', '오이 1개', '아몬드 슬라이스 30g', '레몬 1개', '화이트 발사믹 30ml', '올리브오일 45ml'],
    steps: ['참외는 씨를 제거하고 얇은 초승달 모양으로 썬다.', '오이는 필러로 리본처럼 깎는다.', '화이트 발사믹, 레몬즙, 올리브오일, 소금으로 산미 중심의 드레싱을 만든다.', '루콜라는 서빙 직전에만 가볍게 버무린다.', '참외와 오이를 접어 담고 루콜라, 구운 아몬드, 레몬 제스트로 마무리한다.']
  },
  {
    title: '시어드 새우',
    ingredients: ['머리 달린 큰 새우 15마리', '콜리플라워 700g', '생크림 150ml', '우유 150ml', '버터 40g', '깻잎 20장', '올리브오일 120ml', '화이트와인 80ml', '토마토페이스트 1작은술'],
    steps: ['새우 머리와 껍질을 분리하고 몸통의 내장을 제거한다.', '머리 일부는 샬롯·마늘과 볶은 뒤 토마토페이스트와 화이트와인을 더해 비스크를 만든다.', '콜리플라워는 우유와 생크림에 부드럽게 익혀 곱게 갈고 체에 내린다.', '깻잎과 올리브오일을 곱게 갈아 고운 체에 거른다.', '새우 몸통은 물기를 완전히 제거하고 강한 팬에서 짧게 시어링한다.', '퓌레, 새우, 비스크, 깻잎 오일 순으로 절제해 담는다.']
  },
  {
    title: '클래식 라자냐 볼로네제',
    ingredients: ['소고기 다짐육 800g', '돼지고기 다짐육 400g', '판체타 150g', '파사타 1.4L', '양파 2개', '당근 2개', '셀러리 2대', '라자냐면 500g', '우유 1.5L', '버터 110g', '밀가루 110g', '파르미자노 320g'],
    steps: ['판체타를 볶아 지방을 내고 잘게 썬 소프리토를 천천히 익힌다.', '다짐육을 충분히 갈색 내고 와인을 넣어 알코올을 날린다.', '파사타를 더해 약불에서 1시간 30분 이상 끓이고 마지막에 우유를 넣는다.', '버터와 밀가루로 루를 만들고 따뜻한 우유를 나눠 넣어 베샤멜을 만든다.', '베샤멜, 면, 라구, 파르미자노 순으로 4~5층 조립한다.', '180도에서 호일을 덮어 30분, 벗겨 15~20분 굽고 최소 20분 휴지한다.']
  },
  {
    title: '수비드 오리가슴살',
    ingredients: ['껍질 붙은 오리가슴살 850g', '감자 1kg', '오렌지즙 200ml', '치킨스톡 200ml', '발사믹 25ml', '유자청 2작은술', '샬롯 2개', '버터 120g', '미니당근 또는 아스파라거스'],
    steps: ['껍질에 얕은 격자 칼집을 내고 고기 중량의 0.8% 소금으로 간한다.', '56.5도에서 2시간 수비드한다.', '꺼낸 뒤 표면을 완전히 말리고 차가운 팬에서 껍질 쪽부터 중약불로 지방을 렌더링한다.', '오렌지즙, 스톡, 발사믹, 샬롯을 졸인 뒤 유자청과 차가운 버터로 마무리한다.', '감자는 삶아 버터와 따뜻한 우유를 섞어 곱게 퓌레로 만든다.', '오리를 얇게 썰어 퓌레, 구운 채소, 산미 있는 쥬와 함께 낸다.']
  }
];

const shopping = [
  ['정육·수산', ['오리가슴살 850g', '머리 달린 큰 새우 15마리', '소고기 다짐육 800g', '돼지고기 다짐육 400g', '판체타 150g']],
  ['채소·과일', ['참외 2개', '루콜라 120g', '오이 1개', '콜리플라워 700g', '깻잎 20장', '양파 3개', '당근 2개', '셀러리 2대', '감자 1kg', '오렌지 3개', '레몬 2개', '샬롯 2개', '제철 채소']],
  ['유제품·치즈', ['우유 2L', '생크림 300ml', '버터 250g', '파르미자노 320g']],
  ['팬트리', ['파사타 1.4L', '라자냐면 500g', '화이트 발사믹', '발사믹', '유자청', '토마토페이스트', '아몬드 슬라이스', '밀가루', '올리브오일', '화이트와인', '치킨스톡']]
] as const;

const timeline = [
  ['D-3', '오리가슴살·새우 온라인 주문, 라자냐 용기와 수비드 봉투 확인'],
  ['D-1 오전', '라구와 베샤멜 완성, 라자냐 조립'],
  ['D-1 오후', '비스크·콜리플라워 퓌레·깻잎 오일·유자 발사믹 베이스 준비'],
  ['당일 15:00', '새우 머리 육수 준비, 감자 삶기, 테이블 세팅'],
  ['당일 16:30', '오리가슴살 수비드 시작'],
  ['당일 17:50', '라자냐 굽기 시작'],
  ['당일 18:40', '샐러드 재료 최종 손질, 접시 예열·냉각 구분'],
  ['18:50', '참외와 루콜라 서빙'],
  ['19:15', '새우 시어링 후 전채 서빙'],
  ['19:45', '라자냐 서빙'],
  ['20:20', '오리 껍질 렌더링·메인 플레이팅']
];

export default function Home() {
  const [chef, setChef] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [pressTimer, setPressTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('chef') === 'true') setChef(true);
    const saved = window.localStorage.getItem('jiane-checks');
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('jiane-checks', JSON.stringify(checked));
  }, [checked]);

  const allItems = useMemo(() => shopping.flatMap(([group, items]) => items.map(item => `${group}-${item}`)), []);
  const completed = allItems.filter(key => checked[key]).length;

  function startPress() {
    const timer = setTimeout(() => setChef(v => !v), 1200);
    setPressTimer(timer);
  }

  function endPress() {
    if (pressTimer) clearTimeout(pressTimer);
    setPressTimer(null);
  }

  return (
    <main>
      <section className="hero">
        <div className="eyebrow">A seasonal table at home</div>
        <button className="brand" onMouseDown={startPress} onMouseUp={endPress} onMouseLeave={endPress} onTouchStart={startPress} onTouchEnd={endPress} aria-label="JIANE">
          JIANE
        </button>
        <p className="brand-korean">지안이네, 한여름의 저녁</p>
        <div className="hero-meta"><span>31 JULY</span><span>FIVE GUESTS</span><span>SEOUL</span></div>
        <a className="scroll" href="#menu">View the menu ↓</a>
      </section>

      <section id="menu" className="section menu-section">
        <div className="section-label">The Menu</div>
        <h1>여름의 결을 따라<br/>가볍게 시작해 깊게 끝나는 네 접시</h1>
        <div className="course-list">
          {courses.map(course => (
            <article key={course.index} className="course-card">
              <div className="course-index">{course.index}</div>
              <div>
                <h2>{course.title}</h2>
                <p className="course-subtitle">{course.subtitle}</p>
                <p className="course-note">{course.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section story">
        <div className="section-label">The Signature</div>
        <div className="story-grid">
          <h2>한국의 여름을<br/>익숙하지 않게.</h2>
          <p>참외의 차가운 단맛, 깻잎의 초록 향, 유자의 섬세한 산미를 서양 조리법 안에 절제해 담았습니다. 정통 라자냐가 중심을 잡고, 새우의 머리부터 오리의 껍질까지 재료의 쓰임을 끝까지 이어갑니다.</p>
        </div>
      </section>

      {chef && (
        <section className="chef-panel">
          <div className="chef-header">
            <div>
              <div className="section-label">Chef Mode</div>
              <h2>Kitchen Runbook</h2>
            </div>
            <button onClick={() => setChef(false)}>Close</button>
          </div>

          <div className="chef-grid">
            <div className="panel-block">
              <h3>장보기 <span>{completed}/{allItems.length}</span></h3>
              {shopping.map(([group, items]) => (
                <div key={group} className="shopping-group">
                  <h4>{group}</h4>
                  {items.map(item => {
                    const key = `${group}-${item}`;
                    return (
                      <label key={key} className={checked[key] ? 'checked' : ''}>
                        <input type="checkbox" checked={!!checked[key]} onChange={() => setChecked(prev => ({...prev, [key]: !prev[key]}))}/>
                        <span>{item}</span>
                      </label>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="panel-block">
              <h3>타임라인</h3>
              <div className="timeline">
                {timeline.map(([time, task]) => (
                  <div className="timeline-row" key={time + task}>
                    <strong>{time}</strong><span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="recipes">
            {recipes.map(recipe => (
              <details key={recipe.title}>
                <summary>{recipe.title}</summary>
                <div className="recipe-body">
                  <div><h4>재료</h4><ul>{recipe.ingredients.map(item => <li key={item}>{item}</li>)}</ul></div>
                  <div><h4>조리</h4><ol>{recipe.steps.map(step => <li key={step}>{step}</li>)}</ol></div>
                </div>
              </details>
            ))}
          </div>

          <details className="hidden-course">
            <summary>One more thing…</summary>
            <div className="hidden-inner">
              <div className="section-label">Late-night course</div>
              <h3>새우 비스크 라면</h3>
              <p>전채에서 남은 새우 머리와 껍질을 충분히 볶아 20분 우린 뒤 체에 거른다. 라면 스프는 60%부터 시작하고 청양고추와 대파로 마무리한다. 5명이 작은 그릇으로 나눌 경우 2~3봉이면 충분하다.</p>
            </div>
          </details>
        </section>
      )}

      <footer>
        <button onClick={() => setChef(v => !v)}>{chef ? 'Exit chef mode' : 'JIANE · 2026'}</button>
      </footer>
    </main>
  );
}
