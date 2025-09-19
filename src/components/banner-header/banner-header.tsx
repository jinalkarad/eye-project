import React from 'react'

interface Props {
    primaryText?: string;
    secondaryText?: string;
}

const BannerHeader: React.FC<Props> = ({
    primaryText,
    secondaryText
}) => {
    return (
        <div className="container m-auto z-3">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    {primaryText && <h5 className="fs_42 fw_800 white mb_0">{primaryText}</h5>}
                    {secondaryText && <p className="fs_20 fw_400 white my_16">{secondaryText}</p>}
                </div>
            </div>
        </div>
    )
}

export default BannerHeader