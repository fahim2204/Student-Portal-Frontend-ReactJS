import React from 'react'

const View = () => {
    return (
        <div>
            <div class="main-body">
                {/* <!-- Breadcrumb --> */}
                <nav aria-label="breadcrumb" class="main-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Profile</li>
                        <li class="breadcrumb-item active" aria-current="page">username</li>
                    </ol>
                </nav>
                {/* <!-- /Breadcrumb --> */}
               
            </div>
        </div>
    )
}

export default View
