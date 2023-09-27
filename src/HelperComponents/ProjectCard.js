import Icon from "./Icon";
import ItemizedList from "./ItemizedList";

function ProjectCard(props) {
  // const {title, description, technologies, githubLink, liveLink} = props;
  const borderStyling = `border rounded-lg `
  const bodyTextStyling = `
    text-left text-body-text max-w-sm
    text-xs p-2
    md:text-sm
    lg:text-sm 
    xl:text-md 
    2xl:text-md 
  `;
  const githubIcon = "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z";
  const externalIcon = "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z";

  const title = "Ethereum Price Prediction Model"; // placeholder
  const description = `Forecasted future NASDAQ and S&P500 prices using historic data, then trained a stacked linear regression and k-nearest neighbors model to predict future Ethereum prices given forecasted stocks.`
  const technologies_1 = {"Python": ["scikit-learn", "pandas", "NumPy"], "Jupyter Notebook": ["Google Colab"]};
  const githubLink = "https://github.com";
  const liveLink = "https://eth-predictor-google-colab.herokuapp.com/";
  return (
    <div className={`
      p-2
      md:p-4
      lg:p-4
      xl:p-6
      2xl:p-8
    `}>
      <div className="flex rounded-lg h-full text-white bg-card-bg bg-opacity-70 py-2 px-4 flex-col">

        <div 
          className={`
            font-jetbrains text-center
            text-sm pb-2
            md:text-sm
            lg:text-md 
            xl:text-md
            2xl:text-lg
          `}
        >{title}</div>

        <div
          dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }}
          className={bodyTextStyling + borderStyling + " font-roboto"}
        />

        <ItemizedList items={technologies_1} styling={bodyTextStyling + borderStyling + " mt-2 font-jetbrains text-tech-text"}/>
        
        <div className={"mt-2 flex flex-wrap justify-center"}>
          {githubLink === "" ? null : (
            <a className="px-3" href={githubLink} target="_blank" rel="noreferrer">
              <Icon color="#ffffff" iconPath={githubIcon} sizeClass="w-6 h-6"/>
            </a>
          )}
          {liveLink === "" ? null : (
            <a className="px-3" href={liveLink} target="_blank" rel="noreferrer">
              <Icon color="#ffffff" iconPath={externalIcon} sizeClass="w-6 h-6"/>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;