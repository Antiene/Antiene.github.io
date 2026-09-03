# Antiene.github.io

## Notion 이미지 올리기

Notion에서 내보낸 글에 `file://...` 이미지 링크가 있으면 GitHub Pages에서 보이지 않습니다.  
아래 방식으로 레포지토리에 이미지를 넣으면 블로그에서 바로 표시됩니다.

1. 이미지 파일을 `/assets/images/posts/<포스트-파일명-폴더>/` 아래에 저장
2. 포스트 이미지 링크를 `![]({{ '/assets/images/posts/.../파일명' | relative_url }})` 형식으로 변경

예시 포스트:
- `/home/runner/work/Antiene.github.io/Antiene.github.io/_posts/2026-07-14-notion-39de67e1b53180de8212c05747a34d9b.md`
- 이미지 폴더: `/home/runner/work/Antiene.github.io/Antiene.github.io/assets/images/posts/2026-07-14-notion-39de67e1b53180de8212c05747a34d9b/`