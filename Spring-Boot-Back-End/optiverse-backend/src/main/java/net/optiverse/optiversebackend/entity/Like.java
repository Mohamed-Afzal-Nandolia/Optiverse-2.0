package net.optiverse.optiversebackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "likes")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long l_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id", referencedColumnName = "u_id")
    private User u_id;

    // Define Many-to-One relationship with Post
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "p_id", referencedColumnName = "p_id")
    private Post p_id;

    @Column(name = "l_count")
    private Long likeCount;

}
