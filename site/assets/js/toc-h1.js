// H1 제목을 TOC에 추가하는 스크립트
(function() {
  var tocBuilt = false;
  var retryCount = 0;
  var maxRetries = 50;
  
  function buildTOC() {
    console.log('[TOC] Attempt', retryCount + 1, '- Starting TOC rebuild with H1 support');
    
    // TOC 컨테이너 찾기 (여러 선택자 시도)
    var tocList = document.querySelector('.md-nav--secondary .md-nav__list[data-md-component="toc"]');
    if (!tocList) {
      tocList = document.querySelector('.md-nav--secondary .md-nav__list');
    }
    
    // 메인 콘텐츠 영역 찾기
    var content = document.querySelector('.md-content__inner');
    
    if (!tocList || !content) {
      if (retryCount < maxRetries) {
        retryCount++;
        console.warn('[TOC] Elements not ready, retrying in 100ms... (attempt', retryCount, '/', maxRetries, ')');
        setTimeout(buildTOC, 100);
      } else {
        console.error('[TOC] Failed to find required elements after', maxRetries, 'attempts');
      }
      return;
    }
    
    console.log('[TOC] Elements found - TOC list:', !!tocList, 'Content:', !!content);
    
    // 모든 제목 찾기
    var headings = content.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
    console.log('[TOC] Found', headings.length, 'headings with IDs');
    
    if (headings.length === 0) {
      console.warn('[TOC] No headings with IDs found');
      return;
    }
    
    // 첫 번째 H1은 페이지 제목이므로 제외
    var firstH1Found = false;
    var tocItems = [];
    
    Array.from(headings).forEach(function(heading) {
      var tagName = heading.tagName.toLowerCase();
      var id = heading.getAttribute('id');
      var text = heading.textContent.replace(/¶/g, '').replace(/\s+/g, ' ').trim();
      
      // 첫 번째 H1은 건너뛰기
      if (tagName === 'h1' && !firstH1Found) {
        firstH1Found = true;
        console.log('[TOC] Skipping first H1 (page title):', text);
        return;
      }
      
      console.log('[TOC] Adding:', tagName.toUpperCase(), '-', text);
      tocItems.push({
        level: parseInt(tagName.substring(1)),
        id: id,
        text: text,
        tag: tagName
      });
    });
    
    console.log('[TOC] Total items to add:', tocItems.length);
    
    if (tocItems.length === 0) {
      console.warn('[TOC] No items to add (only page title found)');
      return;
    }
    
    // 기존 TOC 내용 저장 (디버깅용)
    var oldContent = tocList.innerHTML;
    
    // 기존 TOC 비우기
    tocList.innerHTML = '';
    
    // 새로운 TOC 항목 생성
    tocItems.forEach(function(item, index) {
      var li = document.createElement('li');
      li.className = 'md-nav__item';
      
      var a = document.createElement('a');
      a.href = '#' + item.id;
      a.className = 'md-nav__link';
      
      // 들여쓰기 (H1: 0em, H2: 0.5em, H3: 1em, H4: 1.5em 등)
      if (item.level > 1) {
        a.style.paddingLeft = ((item.level - 1) * 0.75) + 'em';
      }
      
      var span = document.createElement('span');
      span.className = 'md-ellipsis';
      span.textContent = item.text;
      
      a.appendChild(span);
      li.appendChild(a);
      tocList.appendChild(li);
      
      console.log('[TOC] Added item', index + 1, ':', item.tag.toUpperCase(), item.text);
    });
    
    tocBuilt = true;
    console.log('[TOC] ✓ TOC rebuild complete! Added', tocItems.length, 'items');
  }
  
  // 초기 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('[TOC] DOMContentLoaded event fired');
      setTimeout(buildTOC, 100);
    });
  } else {
    console.log('[TOC] Document already loaded, building TOC immediately');
    setTimeout(buildTOC, 100);
  }
  
  // Material 테마의 instant loading 지원
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      console.log('[TOC] Material instant loading detected, rebuilding TOC');
      tocBuilt = false;
      retryCount = 0;
      setTimeout(buildTOC, 200);
    });
  }
  
  // 추가 보험: window load 이벤트에서도 시도
  window.addEventListener('load', function() {
    if (!tocBuilt) {
      console.log('[TOC] Window load event - attempting to build TOC');
      setTimeout(buildTOC, 100);
    }
  });
})();

