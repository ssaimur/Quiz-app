const [info, setInfo] = useState([]);

const fetchUrl = async () => {
  setLoading(true);
  const response = await fetch(url);
  const data = await response.json();
  setInfo(data.results);
  setLoading(false);
};

useEffect(() => {
  fetchUrl();
}, []);

const { correct_answer, incorrect_answers, question } = info[i];
const arr = [correct_answer, ...incorrect_answers].sort(
  (a, b) => a.length - b.length
);
