// LoadingWrapper.js
import { useState, useEffect } from 'react'
import { Grid } from 'react-loader-spinner'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false)
    }, 1000) // Set loading to false after 1 second

    // Show loading indicator when navigating to a new page
    setLoading(true)

    return () => clearTimeout(loadingTimeout)
  }, [location])

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white opacity-75 z-50">
          <Grid
            visible={true}
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius={12.5}
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
          />
        </div>
      )}
      {children}
    </>
  )
}

export default LoadingWrapper
