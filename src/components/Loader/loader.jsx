import { ThreeDots } from  'react-loader-spinner';
import css from "./loader.module.css";

export const Loader = () => {
return (
    <div className={css.loaderWrapper}>
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#3f51b5" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
    </div>

)
}