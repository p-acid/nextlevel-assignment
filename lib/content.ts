// about content function

export function getContentsList(url: string) {
  const res = fetch(url, {
    method: 'GET',
  }).then(res => res.json());

  return res;
}
