

const User = ({userID}) => {
    let userName  ;

    switch  (userID) {
        case 1:
            userName = "John Doe";
            break;
            case 2:
                userName = "Jane Smith";
                break;
                case 3:
                    userName = "John Doe";
                    break;
                    case 4:
                        userName = "Jane Smith";
                        break;
                        case 5:
                            userName = "John ";
                            break;
                            default:
                              userName = "Unknow user";
                              break;
    }
  return (
    <p>Posted by : <span className="userName"> {userName}  </span> </p>
  )
}

export default User;