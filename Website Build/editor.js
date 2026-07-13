/**
 * NLCA Visual Editor
 * Load via ?edit in URL. Never ships to GitHub.
 * Usage: open squeeze.html?edit in browser
 */
(function () {
  'use strict';

  /* ── config ── */
  const PANEL_W = 300;
  const IGNORE  = ['SCRIPT','STYLE','META','HEAD','HTML','BODY','#editor-root','#editor-topbar'];

  /* ── state ── */
  let selected    = null;
  let editingText = false;

  /* ── inject editor chrome ── */
  const style = document.createElement('style');
  style.id = 'editor-styles';
  style.textContent = `
    body { margin-right: ${PANEL_W}px !important; transition: margin .2s; }
    #editor-topbar {
      position: fixed; top: 0; left: 0; right: ${PANEL_W}px; z-index: 99990;
      height: 40px; background: #1a1a2e; border-bottom: 1px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; gap: 12px; padding: 0 16px;
      font-family: -apple-system, sans-serif; font-size: 12px;
    }
    #editor-topbar .ed-badge {
      background: #1667E8; color: #fff; font-size: 10px; font-weight: 700;
      letter-spacing: 1px; text-transform: uppercase;
      padding: 3px 8px; border-radius: 4px;
    }
    #editor-topbar .ed-path {
      color: rgba(255,255,255,0.45); flex: 1; overflow: hidden;
      white-space: nowrap; text-overflow: ellipsis;
    }
    #editor-topbar .ed-top-btn {
      background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.12); border-radius: 5px;
      padding: 4px 12px; font-size: 11px; font-weight: 600; cursor: pointer;
      font-family: inherit;
      transition: background .15s;
    }
    #editor-topbar .ed-top-btn:hover { background: rgba(255,255,255,0.16); }
    #editor-topbar .ed-top-btn.ed-export {
      background: #1667E8; color: #fff; border-color: #1667E8;
    }
    #editor-topbar .ed-top-btn.ed-export:hover { background: #0F4FB5; }

    #editor-panel {
      position: fixed; top: 0; right: 0; bottom: 0; width: ${PANEL_W}px; z-index: 99991;
      background: #12122a; border-left: 1px solid rgba(255,255,255,0.09);
      display: flex; flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 12px; color: rgba(255,255,255,0.8);
      overflow: hidden;
    }
    #editor-panel .ep-header {
      padding: 12px 14px 10px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    #editor-panel .ep-el-type {
      font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 2px;
    }
    #editor-panel .ep-el-class {
      font-size: 10px; color: rgba(255,255,255,0.35);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    #editor-panel .ep-empty {
      flex: 1; display: flex; align-items: center; justify-content: center;
      text-align: center; color: rgba(255,255,255,0.25); padding: 24px;
      line-height: 1.6;
    }
    #editor-panel .ep-tabs {
      display: flex; border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-shrink: 0;
    }
    #editor-panel .ep-tab {
      flex: 1; padding: 9px 4px; text-align: center;
      font-size: 11px; font-weight: 600; cursor: pointer;
      color: rgba(255,255,255,0.35); letter-spacing: 0.5px;
      text-transform: uppercase; transition: color .15s;
      border-bottom: 2px solid transparent;
    }
    #editor-panel .ep-tab.active { color: #1667E8; border-bottom-color: #1667E8; }
    #editor-panel .ep-body {
      flex: 1; overflow-y: auto; padding: 14px;
      display: flex; flex-direction: column; gap: 16px;
    }
    #editor-panel .ep-section-label {
      font-size: 10px; font-weight: 700; letter-spacing: 1.2px;
      text-transform: uppercase; color: rgba(255,255,255,0.28);
      margin-bottom: 8px;
    }
    #editor-panel .ep-row {
      display: flex; flex-direction: column; gap: 5px;
    }
    #editor-panel .ep-label {
      font-size: 11px; color: rgba(255,255,255,0.45); font-weight: 500;
    }
    #editor-panel .ep-input {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 6px; color: #fff; font-family: inherit; font-size: 12px;
      padding: 7px 10px; width: 100%; outline: none;
      transition: border-color .15s;
    }
    #editor-panel .ep-input:focus { border-color: #1667E8; }
    #editor-panel textarea.ep-input {
      resize: vertical; min-height: 72px; line-height: 1.5;
    }
    #editor-panel .ep-slider-row {
      display: flex; gap: 8px; align-items: center;
    }
    #editor-panel .ep-slider {
      flex: 1; -webkit-appearance: none; height: 3px;
      background: rgba(255,255,255,0.12); border-radius: 2px; outline: none;
    }
    #editor-panel .ep-slider::-webkit-slider-thumb {
      -webkit-appearance: none; width: 13px; height: 13px;
      background: #1667E8; border-radius: 50%; cursor: pointer;
    }
    #editor-panel .ep-num {
      width: 48px; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 5px; color: #fff; font-size: 11px; font-weight: 600;
      padding: 5px 6px; text-align: center; outline: none;
    }
    #editor-panel .ep-num:focus { border-color: #1667E8; }
    #editor-panel select.ep-input {
      cursor: pointer;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='rgba(255,255,255,0.3)'/%3E%3C/svg%3E");
      background-repeat: no-repeat; background-position: right 10px center;
      -webkit-appearance: none; padding-right: 28px;
    }
    #editor-panel .ep-color-row {
      display: flex; gap: 8px; align-items: center;
    }
    #editor-panel .ep-color-swatch {
      width: 32px; height: 32px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);
      cursor: pointer; flex-shrink: 0; overflow: hidden; padding: 0;
    }
    #editor-panel input[type="color"] {
      -webkit-appearance: none; width: 32px; height: 32px;
      border: none; background: none; cursor: pointer; padding: 0;
    }
    #editor-panel .ep-align-group {
      display: flex; gap: 4px;
    }
    #editor-panel .ep-align-btn {
      flex: 1; padding: 7px 4px; background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 5px;
      color: rgba(255,255,255,0.5); font-size: 13px; cursor: pointer;
      transition: all .13s;
    }
    #editor-panel .ep-align-btn.active,
    #editor-panel .ep-align-btn:hover {
      background: rgba(22,103,232,0.2); border-color: #1667E8; color: #fff;
    }
    #editor-panel .ep-spacing-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
    }
    #editor-panel .ep-spacing-cell { display: flex; flex-direction: column; gap: 4px; }

    /* selection ring */
    .ed-selected {
      outline: 2px solid #1667E8 !important;
      outline-offset: 2px !important;
    }
    .ed-hover {
      outline: 1px dashed rgba(22,103,232,0.5) !important;
      outline-offset: 1px !important;
      cursor: crosshair !important;
    }

    /* scrollbar */
    #editor-panel .ep-body::-webkit-scrollbar { width: 4px; }
    #editor-panel .ep-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }
  `;
  document.head.appendChild(style);

  /* ── topbar ── */
  const topbar = document.createElement('div');
  topbar.id = 'editor-topbar';
  topbar.innerHTML = `
    <span class="ed-badge">Edit Mode</span>
    <span class="ed-path" id="ed-path">Click any element to select it</span>
    <button class="ed-top-btn ed-export" onclick="editorExport()">Export HTML</button>
    <button class="ed-top-btn" onclick="editorExit()">Exit</button>
  `;
  document.body.appendChild(topbar);

  /* ── panel ── */
  const panel = document.createElement('div');
  panel.id = 'editor-panel';
  panel.innerHTML = `
    <div class="ep-header" id="ep-header" style="display:none">
      <div class="ep-el-type" id="ep-el-type">—</div>
      <div class="ep-el-class" id="ep-el-class">—</div>
    </div>
    <div class="ep-empty" id="ep-empty">
      Click any element<br>on the page to edit it
    </div>
    <div class="ep-tabs" id="ep-tabs" style="display:none">
      <div class="ep-tab active" data-tab="content" onclick="editorTab('content')">Content</div>
      <div class="ep-tab" data-tab="style" onclick="editorTab('style')">Style</div>
      <div class="ep-tab" data-tab="spacing" onclick="editorTab('spacing')">Spacing</div>
    </div>
    <div class="ep-body" id="ep-body" style="display:none"></div>
  `;
  document.body.appendChild(panel);

  /* ── hover effect ── */
  document.addEventListener('mouseover', function (e) {
    if (editingText) return;
    const t = e.target;
    if (shouldIgnore(t)) return;
    t.classList.add('ed-hover');
  });
  document.addEventListener('mouseout', function (e) {
    e.target.classList.remove('ed-hover');
  });

  /* ── click to select ── */
  document.addEventListener('click', function (e) {
    if (editingText) return;
    const t = e.target;
    if (t.closest('#editor-panel') || t.closest('#editor-topbar')) return;
    if (shouldIgnore(t)) return;
    e.preventDefault();
    e.stopPropagation();
    selectEl(t);
  }, true);

  function shouldIgnore(el) {
    if (!el || !el.tagName) return true;
    return IGNORE.some(s => {
      if (s.startsWith('#')) return el.id === s.slice(1);
      return el.tagName === s;
    }) || el.closest('#editor-panel') || el.closest('#editor-topbar');
  }

  /* ── select element ── */
  function selectEl(el) {
    if (selected) selected.classList.remove('ed-selected');
    selected = el;
    el.classList.add('ed-selected');

    document.getElementById('ep-empty').style.display = 'none';
    document.getElementById('ep-header').style.display = 'block';
    document.getElementById('ep-tabs').style.display = 'flex';
    document.getElementById('ep-body').style.display = 'flex';

    const tag = el.tagName.toLowerCase();
    const cls = el.className.replace('ed-selected','').trim().split(/\s+/).slice(0,3).join(' ');
    document.getElementById('ep-el-type').textContent = tag;
    document.getElementById('ep-el-class').textContent = cls || '(no class)';
    document.getElementById('ed-path').textContent = buildPath(el);

    editorTab(document.querySelector('.ep-tab.active')?.dataset.tab || 'content');
  }

  function buildPath(el) {
    const parts = [];
    let cur = el;
    while (cur && cur.tagName && cur.tagName !== 'BODY' && parts.length < 4) {
      let label = cur.tagName.toLowerCase();
      if (cur.id) label += '#' + cur.id;
      else if (cur.className) {
        const c = cur.className.replace(/ed-\S+/g,'').trim().split(/\s+/)[0];
        if (c) label += '.' + c;
      }
      parts.unshift(label);
      cur = cur.parentElement;
    }
    return parts.join(' › ');
  }

  /* ── tabs ── */
  window.editorTab = function (tab) {
    document.querySelectorAll('.ep-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    const body = document.getElementById('ep-body');
    body.innerHTML = '';
    if (!selected) return;
    if (tab === 'content') renderContentTab(body);
    if (tab === 'style')   renderStyleTab(body);
    if (tab === 'spacing') renderSpacingTab(body);
  };

  /* ── CONTENT TAB ── */
  function renderContentTab(body) {
    const cs  = getComputedStyle(selected);
    const tag = selected.tagName.toLowerCase();

    /* text content */
    const hasDirectText = Array.from(selected.childNodes).some(n => n.nodeType === 3 && n.textContent.trim());
    const isTextEl = ['p','h1','h2','h3','h4','h5','h6','span','a','li','div','button','label'].includes(tag);

    if (isTextEl) {
      const raw = selected.innerHTML;
      const section = mkSection('Text Content');
      const ta = mkTextarea(raw, (val) => {
        selected.innerHTML = val;
      });
      section.appendChild(ta);
      body.appendChild(section);
    }

    /* href */
    if (tag === 'a' || selected.querySelector('a')) {
      const el = tag === 'a' ? selected : selected.querySelector('a');
      const section = mkSection('Link');
      const inp = mkInput('text', el.href || '', (val) => { el.href = val; });
      inp.placeholder = 'https://...';
      section.appendChild(inp);
      body.appendChild(section);
    }

    if (!isTextEl) {
      const note = document.createElement('div');
      note.className = 'ep-empty';
      note.style.cssText = 'flex:none;padding:12px 0;color:rgba(255,255,255,0.25);font-size:11px';
      note.textContent = 'No editable content for this element. Try Style or Spacing.';
      body.appendChild(note);
    }
  }

  /* ── STYLE TAB ── */
  function renderStyleTab(body) {
    const cs = getComputedStyle(selected);

    /* typography section */
    const typo = mkSection('Typography');

    /* font size */
    const fsVal = parseFloat(cs.fontSize) || 16;
    typo.appendChild(mkLabel('Font Size'));
    typo.appendChild(mkSliderRow(fsVal, 8, 120, 1, 'px', (v) => { selected.style.fontSize = v + 'px'; }));

    /* font weight */
    typo.appendChild(mkLabel('Font Weight'));
    typo.appendChild(mkSelect(['100','200','300','400','500','600','700','800','900'], cs.fontWeight.replace(/\D/g,'') || '400', (v) => {
      selected.style.fontWeight = v;
    }));

    /* letter spacing */
    const lsVal = parseFloat(cs.letterSpacing) || 0;
    typo.appendChild(mkLabel('Letter Spacing'));
    typo.appendChild(mkSliderRow(lsVal, -5, 20, 0.5, 'px', (v) => { selected.style.letterSpacing = v + 'px'; }));

    /* line height */
    const lhVal = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.5;
    const lhNorm = +(lhVal / parseFloat(cs.fontSize)).toFixed(2);
    typo.appendChild(mkLabel('Line Height'));
    typo.appendChild(mkSliderRow(lhNorm, 0.8, 3, 0.05, '×', (v) => { selected.style.lineHeight = v; }));

    /* text align */
    typo.appendChild(mkLabel('Text Align'));
    const alignGrp = document.createElement('div');
    alignGrp.className = 'ep-align-group';
    ['left','center','right','justify'].forEach(a => {
      const icons = { left:'⬛⬜⬜', center:'⬜⬛⬜', right:'⬜⬜⬛', justify:'⬛⬛⬛' };
      const labels = { left:'←', center:'↔', right:'→', justify:'⬛' };
      const btn = document.createElement('button');
      btn.className = 'ep-align-btn' + (cs.textAlign === a ? ' active' : '');
      btn.textContent = labels[a];
      btn.title = a;
      btn.onclick = () => {
        selected.style.textAlign = a;
        alignGrp.querySelectorAll('.ep-align-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      };
      alignGrp.appendChild(btn);
    });
    typo.appendChild(alignGrp);

    body.appendChild(typo);

    /* color section */
    const colors = mkSection('Color');

    colors.appendChild(mkLabel('Text Color'));
    colors.appendChild(mkColorRow(cs.color, (v) => { selected.style.color = v; }));

    colors.appendChild(mkLabel('Background'));
    const bgColor = cs.backgroundColor === 'rgba(0, 0, 0, 0)' ? '#ffffff00' : rgbToHex(cs.backgroundColor);
    colors.appendChild(mkColorRow(bgColor, (v) => { selected.style.backgroundColor = v; }));

    body.appendChild(colors);

    /* border radius */
    const shape = mkSection('Shape');
    const brVal = parseFloat(cs.borderRadius) || 0;
    shape.appendChild(mkLabel('Border Radius'));
    shape.appendChild(mkSliderRow(brVal, 0, 64, 1, 'px', (v) => { selected.style.borderRadius = v + 'px'; }));
    body.appendChild(shape);
  }

  /* ── SPACING TAB ── */
  function renderSpacingTab(body) {
    const cs = getComputedStyle(selected);

    const padding = mkSection('Padding');
    padding.appendChild(mkSpacingGrid({
      Top:    parseFloat(cs.paddingTop)    || 0,
      Right:  parseFloat(cs.paddingRight)  || 0,
      Bottom: parseFloat(cs.paddingBottom) || 0,
      Left:   parseFloat(cs.paddingLeft)   || 0,
    }, (side, v) => { selected.style['padding' + side] = v + 'px'; }));
    body.appendChild(padding);

    const margin = mkSection('Margin');
    margin.appendChild(mkSpacingGrid({
      Top:    parseFloat(cs.marginTop)    || 0,
      Right:  parseFloat(cs.marginRight)  || 0,
      Bottom: parseFloat(cs.marginBottom) || 0,
      Left:   parseFloat(cs.marginLeft)   || 0,
    }, (side, v) => { selected.style['margin' + side] = v + 'px'; }));
    body.appendChild(margin);

    const dims = mkSection('Dimensions');
    dims.appendChild(mkLabel('Max Width'));
    const mw = parseFloat(cs.maxWidth) || '';
    const mwInp = mkInput('number', mw, (v) => { selected.style.maxWidth = v ? v + 'px' : ''; });
    mwInp.placeholder = 'none';
    dims.appendChild(mwInp);
    body.appendChild(dims);
  }

  /* ── UI helpers ── */
  function mkSection(label) {
    const sec = document.createElement('div');
    const lbl = document.createElement('div');
    lbl.className = 'ep-section-label';
    lbl.textContent = label;
    sec.appendChild(lbl);
    return sec;
  }
  function mkLabel(text) {
    const lbl = document.createElement('div');
    lbl.className = 'ep-label';
    lbl.textContent = text;
    lbl.style.marginTop = '10px';
    return lbl;
  }
  function mkInput(type, val, onChange) {
    const inp = document.createElement('input');
    inp.type = type; inp.value = val;
    inp.className = 'ep-input';
    inp.addEventListener('input', () => onChange(inp.value));
    return inp;
  }
  function mkTextarea(val, onChange) {
    const ta = document.createElement('textarea');
    ta.className = 'ep-input';
    ta.value = val;
    ta.addEventListener('input', () => onChange(ta.value));
    return ta;
  }
  function mkSelect(options, current, onChange) {
    const sel = document.createElement('select');
    sel.className = 'ep-input';
    options.forEach(o => {
      const opt = document.createElement('option');
      opt.value = o; opt.textContent = o;
      if (o === current) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', () => onChange(sel.value));
    return sel;
  }
  function mkSliderRow(val, min, max, step, unit, onChange) {
    const row = document.createElement('div');
    row.className = 'ep-slider-row';

    const slider = document.createElement('input');
    slider.type = 'range'; slider.min = min; slider.max = max;
    slider.step = step; slider.value = val;
    slider.className = 'ep-slider';

    const num = document.createElement('input');
    num.type = 'number'; num.min = min; num.max = max;
    num.step = step; num.value = val;
    num.className = 'ep-num';

    slider.addEventListener('input', () => {
      num.value = slider.value;
      onChange(parseFloat(slider.value));
    });
    num.addEventListener('input', () => {
      slider.value = num.value;
      onChange(parseFloat(num.value));
    });

    const unitSpan = document.createElement('span');
    unitSpan.textContent = unit;
    unitSpan.style.cssText = 'color:rgba(255,255,255,0.3);font-size:10px;width:16px;flex-shrink:0';

    row.appendChild(slider);
    row.appendChild(num);
    row.appendChild(unitSpan);
    return row;
  }
  function mkColorRow(val, onChange) {
    const row = document.createElement('div');
    row.className = 'ep-color-row';

    const swatch = document.createElement('label');
    swatch.className = 'ep-color-swatch';
    const colorInp = document.createElement('input');
    colorInp.type = 'color';
    try { colorInp.value = val; } catch(e) { colorInp.value = '#ffffff'; }
    swatch.appendChild(colorInp);

    const textInp = document.createElement('input');
    textInp.type = 'text'; textInp.className = 'ep-input';
    textInp.style.flex = '1';
    textInp.value = val;

    colorInp.addEventListener('input', () => {
      textInp.value = colorInp.value;
      onChange(colorInp.value);
    });
    textInp.addEventListener('input', () => {
      try { colorInp.value = textInp.value; } catch(e) {}
      onChange(textInp.value);
    });

    row.appendChild(swatch);
    row.appendChild(textInp);
    return row;
  }
  function mkSpacingGrid(vals, onChange) {
    const grid = document.createElement('div');
    grid.className = 'ep-spacing-grid';
    Object.entries(vals).forEach(([side, v]) => {
      const cell = document.createElement('div');
      cell.className = 'ep-spacing-cell';
      const lbl = document.createElement('div');
      lbl.className = 'ep-label';
      lbl.textContent = side;
      const inp = document.createElement('input');
      inp.type = 'number'; inp.value = v; inp.className = 'ep-num';
      inp.style.width = '100%';
      inp.addEventListener('input', () => onChange(side, parseFloat(inp.value) || 0));
      cell.appendChild(lbl);
      cell.appendChild(inp);
      grid.appendChild(cell);
    });
    return grid;
  }

  /* ── utils ── */
  function rgbToHex(rgb) {
    const m = rgb.match(/[\d.]+/g);
    if (!m || m.length < 3) return '#ffffff';
    return '#' + [m[0],m[1],m[2]].map(x => parseInt(x).toString(16).padStart(2,'0')).join('');
  }

  /* ── EXPORT ── */
  window.editorExport = function () {
    /* remove editor chrome from clone */
    const clone = document.documentElement.cloneNode(true);
    clone.querySelector('#editor-styles')?.remove();
    clone.querySelector('#editor-topbar')?.remove();
    clone.querySelector('#editor-panel')?.remove();
    const bodyEl = clone.querySelector('body');
    if (bodyEl) bodyEl.style.marginRight = '';
    /* remove editor class artifacts */
    clone.querySelectorAll('.ed-selected, .ed-hover').forEach(el => {
      el.classList.remove('ed-selected', 'ed-hover');
    });
    /* remove editor loader snippet */
    clone.querySelectorAll('script').forEach(s => {
      if (s.src && s.src.includes('editor.js')) s.remove();
      if (s.textContent && s.textContent.includes('editor.js')) s.remove();
    });
    const html = '<!DOCTYPE html>\n' + clone.outerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const a    = document.createElement('a');
    a.href     = URL.createObjectURL(blob);
    a.download = document.title.replace(/[^a-z0-9]/gi,'_').toLowerCase() + '_export.html';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  /* ── EXIT ── */
  window.editorExit = function () {
    if (selected) selected.classList.remove('ed-selected');
    document.getElementById('editor-styles')?.remove();
    document.getElementById('editor-topbar')?.remove();
    document.getElementById('editor-panel')?.remove();
    document.body.style.marginRight = '';
    document.removeEventListener('click', () => {}, true);
  };

  console.log('[Editor] Visual editor loaded. Click any element to select it.');
})();
