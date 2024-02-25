package net.optiverse.optiversebackend.model;


import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OptiverseDto {//POJO CLASS

    private Long id;

//    @NotEmpty
//    @Email(message = "Email address is not valid!!")
    private String email;

//    @NotEmpty
//    @Size(min = 3, max = 10, message = "Password must be minimum of 4 characters and maximum of 10 characters")
//    @Pattern(regexp = )
    private String password;

    private Boolean expired;
}
