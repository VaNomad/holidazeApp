export const ErrorDisplay = ({errorMessage}) => {
  return (
    <div className="flex justify-center items-center max-w-sm">
      {errorMessage}
    </div>
  )
}