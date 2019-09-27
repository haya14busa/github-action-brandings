// https://help.github.com/en/articles/metadata-syntax-for-github-actions#branding
const GITHUB_ACTIONS_BRANDING_ICONS = [
  'activity',
  'airplay',
  'alert-circle',
  'alert-octagon',
  'alert-triangle',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'anchor',
  'aperture',
  'archive',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-down',
  'arrow-left-circle',
  'arrow-left',
  'arrow-right-circle',
  'arrow-right',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-right',
  'arrow-up',
  'at-sign',
  'award',
  'bar-chart-2',
  'bar-chart',
  'battery-charging',
  'battery',
  'bell-off',
  'bell',
  'bluetooth',
  'bold',
  'book-open',
  'book',
  'bookmark',
  'box',
  'briefcase',
  'calendar',
  'camera-off',
  'camera',
  'cast',
  'check-circle',
  'check-square',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'circle',
  'clipboard',
  'clock',
  'cloud-drizzle',
  'cloud-lightning',
  'cloud-off',
  'cloud-rain',
  'cloud-snow',
  'cloud',
  'code',
  'command',
  'compass',
  'copy',
  'corner-down-left',
  'corner-down-right',
  'corner-left-down',
  'corner-left-up',
  'corner-right-down',
  'corner-right-up',
  'corner-up-left',
  'corner-up-right',
  'cpu',
  'credit-card',
  'crop',
  'crosshair',
  'database',
  'delete',
  'disc',
  'dollar-sign',
  'download-cloud',
  'download',
  'droplet',
  'edit-2',
  'edit-3',
  'edit',
  'external-link',
  'eye-off',
  'eye',
  'facebook',
  'fast-forward',
  'feather',
  'file-minus',
  'file-plus',
  'file-text',
  'file',
  'film',
  'filter',
  'flag',
  'folder-minus',
  'folder-plus',
  'folder',
  'gift',
  'git-branch',
  'git-commit',
  'git-merge',
  'git-pull-request',
  'globe',
  'grid',
  'hard-drive',
  'hash',
  'headphones',
  'heart',
  'help-circle',
  'home',
  'image',
  'inbox',
  'info',
  'italic',
  'layers',
  'layout',
  'life-buoy',
  'link-2',
  'link',
  'list',
  'loader',
  'lock',
  'log-in',
  'log-out',
  'mail',
  'map-pin',
  'map',
  'maximize-2',
  'maximize',
  'menu',
  'message-circle',
  'message-square',
  'mic-off',
  'mic',
  'minimize-2',
  'minimize',
  'minus-circle',
  'minus-square',
  'minus',
  'monitor',
  'moon',
  'more-horizontal',
  'more-vertical',
  'move',
  'music',
  'navigation-2',
  'navigation',
  'octagon',
  'package',
  'paperclip',
  'pause-circle',
  'pause',
  'percent',
  'phone-call',
  'phone-forwarded',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'phone',
  'pie-chart',
  'play-circle',
  'play',
  'plus-circle',
  'plus-square',
  'plus',
  'pocket',
  'power',
  'printer',
  'radio',
  'refresh-ccw',
  'refresh-cw',
  'repeat',
  'rewind',
  'rotate-ccw',
  'rotate-cw',
  'rss',
  'save',
  'scissors',
  'search',
  'send',
  'server',
  'settings',
  'share-2',
  'share',
  'shield-off',
  'shield',
  'shopping-bag',
  'shopping-cart',
  'shuffle',
  'sidebar',
  'skip-back',
  'skip-forward',
  'slash',
  'sliders',
  'smartphone',
  'speaker',
  'square',
  'star',
  'stop-circle',
  'sun',
  'sunrise',
  'sunset',
  'tablet',
  'tag',
  'target',
  'terminal',
  'thermometer',
  'thumbs-down',
  'thumbs-up',
  'toggle-left',
  'toggle-right',
  'trash-2',
  'trash',
  'trending-down',
  'trending-up',
  'triangle',
  'truck',
  'tv',
  'type',
  'umbrella',
  'underline',
  'unlock',
  'upload-cloud',
  'upload',
  'user-check',
  'user-minus',
  'user-plus',
  'user-x',
  'user',
  'users',
  'video-off',
  'video',
  'voicemail',
  'volume-1',
  'volume-2',
  'volume-x',
  'volume',
  'watch',
  'wifi-off',
  'wifi',
  'wind',
  'x-circle',
  'x-square',
  'x',
  'zap-off',
  'zap',
  'zoom-in',
  'zoom-out',
];

const GITHUB_ACTIONS_BRANDING_COLORS = [
  'white',
  'yellow',
  'blue',
  'green',
  'orange',
  'red',
  'purple',
  'gray-dark',
];


function main() {
  initColorSelector();
  initClipboardJS();
  render();
}

function render() {
  const colorOrRandom = selectedColor();
  let showcase = document.getElementById('showcase');
  clearAllChildren(showcase);
  GITHUB_ACTIONS_BRANDING_ICONS.forEach(icon => {
    const color = colorOrRandom === 'random' ?  randomColor() : colorOrRandom;
    showcase.appendChild(createBadge(icon, color));
  });
  feather.replace();
}

// https://clipboardjs.com/
function initClipboardJS() {
  let clipboard = new ClipboardJS('.gh-action-badge');
  clipboard.on('success', function(e) {
    e.clearSelection();
    showTooltip(e.trigger, 'Copied: ' + e.text);
  });
}

// https://primer.style/css/components/tooltips
function showTooltip(elem, msg) {
  elem.classList.add('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
  elem.setAttribute('aria-label', msg);
}

function clearTooltip(e) {
  e.currentTarget.classList.remove('tooltipped', 'tooltipped-s', 'tooltipped-no-delay');
  e.currentTarget.removeAttribute('aria-label');
}

function initColorSelector() {
  let selector = document.getElementById('color-selector');
  ['random'].concat(GITHUB_ACTIONS_BRANDING_COLORS).forEach(color => {
    let opt = document.createElement('option');
    opt.value = color;
    opt.innerText = color;
    selector.appendChild(opt);
  });
  selector.addEventListener('change', (e) => {
    render();
  });
}

function selectedColor() {
  let selector = document.getElementById('color-selector');
  if (selector.selectedOptions.length == 0) {
    return 'random';
  }
  return selector.selectedOptions[0].value;
}

function createBadge(icon, color) {
  let content = document.getElementById('gh-action-badge-template').cloneNode(true).content;
  content.querySelector('.gh-action-badge-img').classList.add('gh-action-badge--' + color);
  content.querySelector('i').setAttribute('data-feather', icon);
  content.querySelector('.gh-action-badge-name').innerText = icon;
  content.querySelector('.gh-action-badge').setAttribute('data-clipboard-text', icon);
  content.querySelector('.gh-action-badge').addEventListener('mouseleave', clearTooltip);
  return content;
}

function randomColor() {
  return GITHUB_ACTIONS_BRANDING_COLORS[getRandomInt(GITHUB_ACTIONS_BRANDING_COLORS.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function clearAllChildren(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

window.addEventListener('load', main);
