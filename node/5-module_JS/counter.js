let count = 0;
export function increase() {
    count++;
}
export function getCount() {
    return count;
}

// 노드에서 자바스크립트 모듈 쓰려면 
// json파일에 "type": "module",