//The following code is an extract from my first MERN application
//This web app creates personalized stretching routines to registered users,
//and admins are allowed to create and edit these routines

//The problem: User and Routine model are connected to one another
//Once a routine is updated, then the updated information must also
//be saved in the user's routine.

//To solve this I used two useEffect() hooks:
//1. Get the user id connected to the routine to be updated, and
//all the exercises in the database
//2. Set the updated routine exercises to be the user's routine updated
//exercises. This hook has a dependency on the user's whose routine 
//is being updated.

const EditRoutineView = () => {
    const [routine, setRoutine] = useState({
        exercise1: "",
        exercise2: "",
        exercise3: "",
        notes: ""
    });
    const [exercises, setExercises] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetchUser();
        getExercises();
    }, [])

    useEffect(() => {
        setRoutine({
            exercise1: user.routine?.exercise1,
            exercise2: user.routine?.exercise2,
            exercise3: user.routine?.exercise3,
            notes: user.routine?.notes
        })
    }, [user])
    
    const getExercises = async () => {
        const response = await getAllExercises();
        setExercises(response.data);
    }
    
    const fetchUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUser(response.data)
    }

    const handleRoutineChange = (event) => {
        setRoutine({
            ...routine,
            [event.target.name]: event.target.value
        });
    }

    const handleSumbit = async (event) => {
        event.preventDefault();
        const response = await updateRoutineInApi({_id: user.routine._id, ...routine});
        fetchUser();
    }

